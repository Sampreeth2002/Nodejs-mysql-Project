const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("You have hit the main route of the app");
  res.send("Testing 123");
});

// const db = require("./db");

// // Connect
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("MySql connected");
// });

// Create Employee Information

// router.post("/insertEmployee", (req, res) => {
//   let { name, department, salary } = req.body;

//   let sql =
//     "INSERT INTO employee_table (name, department, salary) VALUES (?,?,?)";

//   db.query(sql, [name, department, salary], (err, result) => {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//     res.send("Number of records inserted: " + result.affectedRows);
//   });
// });

// // Get Infromation

// router.get("/getEmployee/:id", (req, res) => {
//   let sql = "SELECT * FROM employee_table where id = ?";
//   let id = req.params.id;
//   db.query(sql, id, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// // Update the information

// router.put("/updatedEmployee/:id", (req, res) => {
//   let { name, department, salary } = req.body;
//   let id = Number(req.params.id);
//   let sql =
//     "UPDATE employee_table SET name = ?,department = ?,salary = ? where id = ?";
//   db.query(sql, [name, department, salary, id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// // Delete the information

// router.delete("/deleteEmployee/:id", (req, res) => {
//   let id = req.params.id;
//   let sql = "DELETE FROM employee_table WHERE id = ?";
//   db.query(sql, [id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

module.exports = router;
