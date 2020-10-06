const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const sUtils = require('../utils/search-utils');
const breedsModel = require('../models/breeds');

mongoose.connect(process.env.DEV_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected '))
    .catch(err => console.error('MongoDB connection error ' + err));

/**
 * Return the top 10 breeds based on the given criteria
 */
exports.searchBreeds = (req, res, next) => {

    // We get all the criteria (to return and weighted) to use them in the project below
    const criteriaSearch = sUtils.breedInfo(req.body);

    // We send the request to the DB, sort by score DESC and limit the results to the value specified in the .env file
    breedsModel.Breeds.aggregate([
            { "$project": criteriaSearch },
            { "$sort": { "score": -1 } },
            { "$limit": parseInt(process.env.RESULTS_LIMIT) }
        ])
        .then(sortedBreeds => res.status(200).json(sortedBreeds))
        .catch(error => res.status(500).json({ error: error.message }));
};