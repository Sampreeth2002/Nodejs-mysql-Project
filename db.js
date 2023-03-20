const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "54.91.255.124",
  user: "sam",
  password: "MyNewPass1!",
  database: "testdb",
});

module.exports = db;
