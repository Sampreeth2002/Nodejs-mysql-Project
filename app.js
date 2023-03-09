const express = require("express");
const app = express();

// Import routes
const routes = require("./routes");
app.use("/", routes);

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
