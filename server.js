const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
require("dotenv").config();

app.use(cors()); // This middleware is needed to authorize the connection between Front and Back -end
app.use(express.json()); // This middleware is needed to parse JSON in the request body

const pool = require("./Database/ElephantSQL");

app.get("/", (req, res) => {
  pool
    .query("SELECT * FROM books;")
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

app.post("/", async (req, res) => {
  const { title, author, category, description, cover_url, published_at } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO books (title, author, category, description, cover_url, published_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, author, category, description, cover_url, published_at]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`server.js running on Port ${PORT}`);
});
