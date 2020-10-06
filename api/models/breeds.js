const mongoose = require('mongoose');

// We are read only so we just create an empty model
exports.Breeds = mongoose.model('Breeds', new mongoose.Schema(), 'breeds');