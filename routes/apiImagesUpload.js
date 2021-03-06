const logger = require("morgan");
const nodemon = require("nodemon");
const bodyParser = require("body-parser");

var Image = require('../models/imageupload.js');
const express = require("express");
const path = require("path");
const crypto = require("crypto"); //to generate file name
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const app = express();

let conn = mongoose.createConnection(
  process.env.MONGODB_URI || "mongodb://localhost/PhotoLog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

conn.once("open", () => {
  //initialize our stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("imageUpload");
});

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/PhotoLog";

let storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const fileInfo = {
        filename: file.originalname,
        bucketName: "imageUpload",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("upload"), (req, res) => {
  res.redirect("/LogYourPhoto");
});

app.post("/uploadprofile", upload.single("uploadprofile"), (req, res) => {
  res.redirect("/LogYourProfilePicture");
});

app.get("/files", (req, res) => {
 gfs.files.find({}).toArray((err, files) => {
   res.json(files);
 })
});

app.get("/files/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    //check if files exist
    if (!file || file.length == 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }
    //file exist
    return res.json(file);
  });
});

app.get("/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    //check if files exist
    if (!file || file.length == 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }
    //check if image
    if (file.contentType === "image/jpeg" || file.contentType === "img/png") {
      //read output to browser
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

app.delete("/files/:id", (req, res) => {
  gfs.remove({ _id: req.params.id, root: "imageUpload" }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }
    res.redirect("/");
  });
});

module.exports = app;
