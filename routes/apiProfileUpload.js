const express = require("express");
const mongojs = require("mongojs");

const ProfilePic = require("../models/profilepic.js");
const app = express();

app.post("/profilepicturelog", ({ body }, res => {
  ProfilePic
    .create(body)
    .then((db) => {
      res.redirect("/LogYourProfilePicture")
    })
    .catch((err) => {
      res.json(err);
    })
}))

app.get("/profilepicturelog", (req, res) => {
  ProfilePic
    .find({ category: "profile" })
    .then((cb) => {
      res.json(cb);
    })
    .catch((err) => {
      res.json(err);
    })
})

app.get("/profilepicturelog/:id", (req, res) => {
  ProfilePic
    .findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, data) => {
      res.send(data);
    })
    .catch((err) => {
      res.json(err)
    })
})

module.exports = app;
