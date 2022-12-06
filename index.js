const express = require("express");
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors())

const courses = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("Hello, this is Coding Skill Server");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((singleCourse) => singleCourse.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Coding Skill Server running on port ${port}`);
});
