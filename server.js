const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const nodemon = require("nodemon");
const app = express();
const bodyParser = require("body-parser");

const fs = require("fs");
const path = require("path");


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./assets"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/PhotoLog", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(require("./routes/html-route"));
app.use(require("./routes/apiLogs"));
app.use(require("./routes/apiProfilePic"));
app.use(require("./routes/apiStatusUpdate"));
app.use(require("./routes/apiImagesUpload"))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
