const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import routes
const routes = require("./routes");

app.get("/", (req, res) => {
  res.send("Home page");
  console.log("You have hitted main page");
});

app.use("/", routes);

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
