const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const nodemon = require('nodemon');
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./assets"));

app.use(require('./routes/html-route'));
app.use(require('./routes/api'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`App running on http://localhost:${PORT}`)})