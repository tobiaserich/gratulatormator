require("dotenv").config();
const express = require("express");
const path = require("path");
const { dbInit } = require("./lib/db");
const { registerUser } = require("./lib/user");

const app = express();
const PORT = process.env.PORT || 9000;

//middleware

app.use(express.json({ extended: false }));

//routes
app.get("/lol", (req, res) => {
  const hello = " Hello World";
  res.send(JSON.stringify(hello));
});

app.post("/user/registration", (req, res) => {
  const data = req.body;
  registerUser(data);
  res.end();
});

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));

// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//initalize database
dbInit(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is ready`);
});

//listener
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
