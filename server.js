const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const nodemon = require('nodemon');
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./assets"));

const route = require('./routes/html-route');
require('./routes/api')

app.use('/', route);
app.use('/engine', route);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`App running on http://localhost:${PORT}`)})