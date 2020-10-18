const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const dbL = require('../models/logs.js');
const dbA = require('../models/logsAnother.js')
const app = express();

app.post('/log', ({ body }, res) => {
    dbL.create(body)
    .then(db => {
        console.log(db)
    })
    .catch(err => {
        res.json(err);
    });
});

app.post('/logAnother', ({ body }, res) => {
    dbA.create(body)
    .then(db => {
        console.log(db)
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = app;