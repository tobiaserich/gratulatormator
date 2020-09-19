export {};
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ObjectID } = require("mongodb");
const { getCollection } = require("./db");
require("dotenv").config();

const registerUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;
  const collection = getCollection("users");
  const inUse = [];
  const checkIfEmailExist = await collection.findOne({ email: data.email });
  const checkIfUsernameExist = await collection.findOne({
    username: data.username,
  });

  if (!checkIfEmailExist && !checkIfUsernameExist) {
    collection.insertOne(data);
    inUse.push("success");
  } else {
    if (checkIfUsernameExist) {
      inUse.push("usernameInUse");
    }
    if (checkIfEmailExist) {
      inUse.push("emailInUse");
    }
  }
  return inUse;
};

const loginUser = async (data) => {
  const collection = getCollection("users");
  const inputPassword = data.password;
  const findUser = await collection.findOne({ username: data.username });
  if (findUser) {
    const storedPassword = findUser.password;
    const comparePassword = await bcrypt.compare(inputPassword, storedPassword);
    if (comparePassword) {
      const token = jwt.sign({ _id: findUser._id }, process.env.TOKEN_SECRET);
      return token;
    } else {
      return "loginFailed";
    }
  } else {
    return "loginFailed";
  }
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.TOKEN_SECRET);
  } catch {
    return false;
  }
};

const verifyUser = async (token) => {
  const collection = getCollection("users");
  if (!token) {
    return false;
  } else {
    const userID = await verifyToken(token);
    const user = await collection.findOne({ _id: ObjectID(userID._id) });
    return user ? true : false;
  }
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.verifyUser = verifyUser;
