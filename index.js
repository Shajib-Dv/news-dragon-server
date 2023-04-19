/** @format */

const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const catagories = require("./data/categories.json");
const news = require("./data/news.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("dragon is running on port 500");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const singleNews = news.filter((n) => n["_id"] === id) || {};
  res.send(singleNews);
});

app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
