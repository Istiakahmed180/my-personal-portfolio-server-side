const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const projects = require("./projects.json");
app.use(cors());
app.use(express.json());

app.get("/projects", (req, res) => {
  res.send(projects);
});

app.get("/projects/:id", (req, res) => {
  const id = req.params.id;
  const project = projects.find((n) => n.id == id);
  res.send(project);
});

app.get("/", (req, res) => {
  res.send("my portfolio server is running");
});

app.listen(port, () => {
  console.log(`my portfolio server is running on ${port}`);
});
