const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "sam",
  password: "MyNewPass1!",
  database: "testdb",
});

module.exports = db;
