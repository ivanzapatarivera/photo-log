const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const logs = require('../models/logs.js');
const profilepic = require('../models/profilepic.js');
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

app.get('/log', (req, res) => {
    logs.find({})
    .then(cb => {
        res.json(cb)
    })
});

app.post('/profilepic', ({ body }, res) => {
    profilepic.create(body)
    .then(db => {
        console.log(db)
    })
    .then(db => {
        res.redirect('/profile')
    })
    .catch(err => {
        res.json(err)
    })
});

app.get('/profilepic', (req, res) => {
    profilepic.find({})
    .then(cb => {
        res.json(cb)
    })
})


module.exports = app;