// Empty object for endpoint data
let projectData = [];

// Require the things
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Use the things
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

// Spin up the Server
const port = 8081;
const server = app.listen(port, () => {
  console.log(`running on port: ${port}`);
});

// Get
app.get("/data", (req, res) => {
  res.send(projectData);
});

// POST - Geonames
app.post("/geonames", (req, res) => {
  geonamesData = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  projectData.push(geonamesData);
  res.send(projectData);
});

// POST Weatherbit
app.post("/weatherbit", (req, res) => {
  weatherBitData = {
    high: req.body.high,
    low: req.body.low,
    description: req.body.description,
  };
  projectData.push(weatherBitData);
  res.send(projectData);
});

// POST Pixabay
app.post("/pixabay", (req, res) => {
  pixabayData = {
    image: req.body.image,
  };
  projectData.push(pixabayData);
  res.send(projectData);
});

// export
module.exports = server;