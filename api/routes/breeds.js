const express = require('express');
const router = express.Router();

const breedsCtrl = require('../controllers/breeds');

router.get('/:nameId', breedsCtrl.getOneBreed);

module.exports = router;