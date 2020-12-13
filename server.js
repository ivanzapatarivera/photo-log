const logger = require("morgan");
const nodemon = require("nodemon");
const bodyParser = require("body-parser");

const express = require("express");
const path = require("path");
const crypto = require("crypto"); //to generate file name
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./assets"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/PhotoLog", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Connecting GridFS
// const conn = mongoose.connection;
// let gfs;


app.use(require("./routes/html-route"));
app.use(require("./routes/apiLogs"));
app.use(require("./routes/apiProfilePic"));
app.use(require("./routes/apiStatusUpdate"));
app.use(require("./routes/apiImagesUpload"));
app.use(require("./routes/apiProfileUpload"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
