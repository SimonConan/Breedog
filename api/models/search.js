const mongoose = require('mongoose');

const searchSchema = mongoose.Schema({
    object: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Search', searchSchema, 'search');