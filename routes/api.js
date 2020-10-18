const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const logs = require('../models/logs.js');
const another = require('../models/logsAnother.js')
const app = express();

app.post('/log', ({ body }, res) => {
    logs.create(body)
    .then(db => {
        console.log(db)
    })
    .then(db => {
        res.redirect('/thankyou')
    })
    .catch(err => {
        res.json(err);
    });
});

app.post('/logAnother', ({ body }, res) => {
    another.create(body)
    .then(db => {
        console.log(db)
    })
    .then(db => {
        res.redirect('/thankyou')
    })
    .catch(err => {
        res.json(err);
    });
});

app.get('/log', (req, res) => {
    logs.find({})
    .then(cb => {
        res.json(cb)
    })
})

app.get('/logAnother', (req, res) => {
    another.find({})
    .then(cb => {
        res.json(cb)
    })
})

module.exports = app;