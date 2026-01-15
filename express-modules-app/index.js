const express = require("express");
const os = require("os");
const dns = require("dns");

const readFileData = require("./read");

const app = express();
const PORT = 3000;
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});
app.get("/readfile", (req, res) => {
  const data = readFileData();
  res.send(data);
});
