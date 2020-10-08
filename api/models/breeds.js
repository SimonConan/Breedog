const mongoose = require('mongoose');

// We are read only so we just create an empty model
module.exports = mongoose.model('Breeds', new mongoose.Schema(), 'breeds');