const express = require("express");
const mongojs = require("mongojs");

const statusUpdate = require("../models/statusupdate.js");
const app = express();

// These are the route for status updates
app.post("/status", ({ body }, res) => {
    statusUpdate
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
  
  app.get("/status", (req, res) => {
    statusUpdate
      .find({})
      .sort({ timestamp: 1 })
      .then((cb) => {
        res.json(cb);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // These are the routes to find status by ID
  app.get("/findStatus/:id", (req, res) => {
    statusUpdate.findOne(
      { _id: mongojs.ObjectId(req.params.id) },
      (err, data) => {
        if (err) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  
  app.delete("/deleteStatus/:id", (req, res) => {
    statusUpdate
      .remove({ _id: mongojs.ObjectId(req.params.id) }, (err, data) => {
        if (err) {
          res.send(error);
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = app;