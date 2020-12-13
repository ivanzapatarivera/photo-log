const express = require("express");
const mongojs = require("mongojs");

const logs = require("../models/logs.js");
const app = express();

app.post("/uploadprofile", ({ body }, res => {
  logs
    .create(body)
    .then((db) => {
      res.redirect("/LogYourProfilePicture")
    })
    .catch((err) => {
      res.json(err);
    })
}))

app.get("/uploadprofile", (req, res) => {
  logs
    .find({ category: "profile" })
    .then((cb) => {
      res.json(cb);
    })
    .catch((err) => {
      res.json(err);
    })
})

app.get("/uploadprofile/:id", (req, res) => {
  logs
    .findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, data) => {
      res.send(data);
    })
    .catch((err) => {
      res.json(err)
    })
})

module.exports = app;
