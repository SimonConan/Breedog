const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const sUtils = require('../utils/search-utils');
const Breeds = require('../models/breeds');
const Search = require('../models/search');

mongoose.connect(process.env.DEV_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected '))
    .catch(err => console.error('MongoDB connection error ' + err));

/**
 * Save in the DB the object to be used in the search. The unique ID returned is to be used in a cookie to retrieve the search
 */
exports.saveSearch = (req, res, next) => {

    if(!req.body) res.status(500).json({ error: 'No body is specified' });

    const search = new Search({ object: JSON.stringify(req.body) });
    search.save()
        .then(savedSearch => res.status(200).json(savedSearch.id))
        .catch(error => res.status(500).json({ error: error.message }));
};

/**
 * Return the top breeds based on the given criteria
 */
exports.searchBreeds = (req, res, next) => {

    if(!req.body) res.status(500).json({ error: 'No body is specified' });

    // We get all the criteria (to return and weighted) to use them in the project below
    const criteriaSearch = sUtils.breedInfo(req.body);

    // We send the request to the DB, sort by score DESC and limit the results to the value specified in the .env file
    Breeds.aggregate([
            { "$project": criteriaSearch },
            { "$sort": { "score": -1 } },
            { "$limit": parseInt(process.env.RESULTS_LIMIT) }
        ])
        .then(sortedBreeds => res.status(200).json(sortedBreeds))
        .catch(error => res.status(500).json({ error: error.message }));
};