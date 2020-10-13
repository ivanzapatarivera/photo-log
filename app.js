const express = require("express");
const app = express();
const port = 3000;

const birds = require('./birds')

app.use('/', birds);

app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`);
});
