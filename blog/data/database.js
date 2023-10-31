const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "swapnil@2072",
});

module.exports = pool;
