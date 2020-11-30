const express = require("express");
const mongojs = require("mongojs");

const profilepic = require("../models/profilepic.js");
const app = express();

// These are the routes for profile picture updates
app.post("/profilepic", ({ body }, res) => {
    profilepic
      .create(body)
      .then((db) => {
        console.log(db);
      })
      .then((db) => {
        res.redirect("/profile");
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  app.get("/profilepic", (req, res) => {
    profilepic
      .find({})
      .then((cb) => {
        res.json(cb);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  module.exports = app;