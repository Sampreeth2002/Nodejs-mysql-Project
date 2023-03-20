const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const REDIS_PORT = process.env.PORT || 6379;

// const client = redis.createClient({
//   legacyMode: true,
//   PORT: REDIS_PORT,
// });
// client.connect().catch(console.error);

// Import routes
const routes = require("./routes");

app.get("/", (req, res) => {
  res.send("Home page");
  console.log("You have hitted main page");
});

// Set response
// function setResponse(username, repos) {
//   return `<h2>${username} has ${repos} repos</h2>`;
// }

// Make Request to github for data

// async function getRepos(req, res, next) {
//   try {
//     console.log("Fetching Data....");
//     const { username } = req.params;
//     const response = await fetch(`https://api.github.com/users/${username}`);
//     const data = await response.json();
//     // res.send(data);
//     const repos = data.public_repos;

//     client.setEx(username, 3600, repos);
//     res.send(setResponse(username, repos));
//   } catch (err) {
//     console.log(err);
//     res.status(500);
//   }
// }

// Cache middleware
// function cache(req, res, next) {
//   const { username } = req.params;

//   client.get(username, (err, data) => {
//     if (err) throw err;
//     if (data !== null) {
//       res.send(setResponse(username, data));
//     } else {
//       next();
//     }
//   });
// }

app.get("/repos/:username", getRepos);

app.use("/", routes);

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
