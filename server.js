const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
require("dotenv").config();

app.use(cors());

const pool = require("./Database/ElephantSQL");
app.get("/", (req, res) => {
  pool
    .query("SELECT * FROM users;")
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

app.listen(PORT, () => {
  console.log(`server.js running on Port ${PORT}`);
});
