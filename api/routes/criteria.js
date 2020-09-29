const express = require('express');
const router = express.Router();

const criteriaCtrl = require('../controllers/criteria');

router
    .get('/', criteriaCtrl.getCriteria);

module.exports = router;