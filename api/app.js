const express = require('express');
const bodyParser = require('body-parser');

const criteriaRouter = require('./routes/criteria');
const breedsRouter = require('./routes/breeds');

const app = express();

app
    .use(bodyParser.json())
    .use('/criteria', criteriaRouter)
    .use('/breeds', breedsRouter)
    .use((req, res, next) => {
        res.status(200).json({ message: 'Server UP and running' });
    });

module.exports = app;