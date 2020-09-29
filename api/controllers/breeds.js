const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const sUtils = require('../utils/search-utils');

mongoose.connect(process.env.DEV_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected '))
    .catch(err => console.error('MongoDB connection error ' + err));

// We are read only so we just create an empty model
const Breeds = mongoose.model('Breeds', new mongoose.Schema(), 'breeds');

/**
 * Get one breed based on the nameId passed in the url
 */
exports.getOneBreed = (req, res, next) => {
    Breeds.findOne({ nameId: req.params.nameId }).lean()
        .then(breed => {
            if (!breed) throw new Error("Breed not found");
            res.status(200).json(breed);
        })
        .catch(error => res.status(404).json({ error: error.message }));
};

/**
 * Return the top 10 breeds based on the given criteria
 */
exports.searchBreeds = (req, res, next) => {

    // We get all the criteria (to return and weighted) to use them in the project below
    const criteriaSearch = sUtils.breedInfo(req.body);

    // We send the request to the DB, limit the results to the value specified in the .env file and sort by score DESC
    Breeds.aggregate([
            { "$project": criteriaSearch },
            { "$limit": parseInt(process.env.RESULTS_LIMIT) },
            { "$sort": { "score": -1 } },
        ])
        .then(sortedBreeds => res.status(200).json(sortedBreeds))
        .catch(error => res.status(500).json({ error: error.message }));
};