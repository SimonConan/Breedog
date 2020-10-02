const express = require('express');
const bodyParser = require('body-parser');

const criteriaRouter = require('./routes/criteria');
const breedsRouter = require('./routes/breeds');

const app = express();

app
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        next();
    })
    .use(bodyParser.json())
    .use('/api/criteria', criteriaRouter)
    .use('/api/breeds', breedsRouter)
    .use((req, res, next) => {
        res.status(200).json({ message: 'Server UP and running' });
    });

module.exports = app;