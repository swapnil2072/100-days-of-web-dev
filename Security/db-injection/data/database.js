const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: 'swapnil@2072',
  multipleStatements: true
})

module.exports = pool;