const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/photolog", { 
  useNewUrlParser: true,
  useFindAndModify: false
});

app.post('/log', ({ body }, res) => {

})

module.exports = app;