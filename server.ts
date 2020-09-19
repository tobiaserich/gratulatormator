require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const { dbInit } = require("./lib/db");
const { registerUser, loginUser, verifyUser } = require("./lib/user");
const { addBirthday } = require("./lib/birthday");

const app = express();
const PORT = process.env.PORT || 9000;

//middleware
app.use(express.json({ extended: false }));
app.use(cookieParser());

//routes
app.get("/lol", (req, res) => {
  const hello = " Hello World";
  res.send(JSON.stringify(hello));
});

app.get("/user/verify", async (req, res) => {
  const token = req.cookies.access_token;
  const verify = await verifyUser(token);
  res.send(verify);
});

app.post("/user/registration", async (req, res) => {
  const data = req.body;
  const register = await registerUser(data);
  res.end(JSON.stringify(register));
});

app.post("/user/login", async (req, res) => {
  const data = req.body;
  const login = await loginUser(data);
  let response;
  if (login !== "loginFailed") {
    response = "success";
    res.cookie("access_token", login, {
      maxAge: 3600000,
      httpOnly: true,
    });
  } else {
    response = "failed";
  }
  res.send(JSON.stringify(response));
});

app.post("/birthday/add", async (req, res) => {
  addBirthday(req.body, req.cookies.access_token);
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
