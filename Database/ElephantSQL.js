const { Pool } = require('pg')

const pool = new Pool({
  connectionString : process.env.connectionString
})

module.exports = pool;