const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://test-vercel-4553.vercel.app"],
  })
);

const data = [
  {
    id: 1,
    name: "Ace",
  },
  {
    id: 2,
    name: "Riste",
  },
  {
    id: 3,
    name: "Ceca",
  },
];

app.get("/", (req, res) => {
  return res.send(`This is an environment variable: ${process.env.TEST}`);
});

app.get("/test", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

app.get("/data", (req, res) => {
  return res.send(data);
});

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

module.exports = app;
