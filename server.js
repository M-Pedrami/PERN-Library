const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const pool = require('./Database/ElephantSQL')

app.listen(PORT, ()=>{
  console.log(`server.js running on Port ${PORT}`);
})