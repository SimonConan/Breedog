const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

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
            if(!breed) throw new Error("Breed not found");
            res.status(200).json(breed);
        })
        .catch(error => res.status(404).json({ error: error.message }));
};