const express = require('express');
const mongojs = require('mongojs');
const logger = require('morgan');
const path = require('path');

const app = express();
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('assets/html'));

const dbURL = 'photolog';
const dbLogs = ['logs'];
const dbL = mongojs(dbURL, dbLogs);

app.post('/log', (req, res) => {
    console.log(req.body);
    dbL.logs.insert(req.body, (error, log) => {
        if (error) {
            res.send(error);
        } else {
            res.send(log)
        }
    })
})