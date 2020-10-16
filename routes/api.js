const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const nodemon = require('nodemon');
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbURL = 'photolog';
const colLogs = ['logs'];

app.post('/logs', (req, res) => {
    console.log(req)
    
})

module.exports = app;