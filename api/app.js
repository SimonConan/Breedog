const express = require('express');

const criteriaRouter = require('./routes/criteria');

const app = express();

app
    .use('/criteria', criteriaRouter)
    .use((req, res, next) => {
        res.status(200).json({ message: 'Server UP and running' });
    });

module.exports = app;