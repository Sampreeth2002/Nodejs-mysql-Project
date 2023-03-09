const express = require("express");
const router = express.Router();
const db = require("./db");

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql connected");
});

// Create DB
router.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("database created");
  });
});

// Insert multiple entries into employee_table

router.post("/insertEmployee", (req, res) => {
  var rows = [
    { name: "David", department: "IT", salary: 120000 },
    { name: "Sam", department: "IT", salary: 100000 },
    { name: "Ravi", department: "Coustomer-Support", salary: 56000 },
    { name: "Rena", department: "HR", salary: 75000 },
  ];

  let sql = "INSERT INTO employee_table (name, department, salary) VALUES ";
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    sql += `('${row.name}', '${row.department}', '${row.salary}')`;
    if (i < rows.length - 1) {
      sql += ",";
    }
  }

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    res.send("Number of records inserted: " + result.affectedRows);
  });
});

// Get Infromation

router.get("/getEmployee", (req, res) => {
  let sql = "SELECT * FROM employee_table where id = ?";
  let id = 1;
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Update the information

router.put("/updatedEmployee/:id", (req, res) => {
  let newName = "Rajendra";
  let id = req.params.id;
  let sql = "UPDATE employee_table SET name = ? where id = ?";
  db.query(sql, [newName, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Delete the information

router.delete("/deleteEmployee/:id", (req, res) => {
  let id = req.params.id;
  let sql = "DELETE FROM employee_table WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
