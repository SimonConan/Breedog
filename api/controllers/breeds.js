const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const breedsModel = require('../models/breeds');

mongoose.connect(process.env.DEV_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected '))
    .catch(err => console.error('MongoDB connection error ' + err));

/**
 * Get one breed based on the nameId passed in the url
 */
exports.getOneBreed = (req, res, next) => {
    breedsModel.Breeds.findOne({ nameId: req.params.nameId }).lean()
        .then(breed => {
            if (!breed) throw new Error("Breed not found");
            res.status(200).json(breed);
        })
        .catch(error => res.status(404).json({ error: error.message }));
};