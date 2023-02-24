const express = require("express");
const app = express();

const status = [200, 404, 500, 302, 503];

function getRandomStatus() {
  return status[Math.floor(Math.random() * status.length)];
}

app.get("/", (req, res) => {
  res.status(getRandomStatus()).send();
});

module.exports = app;
