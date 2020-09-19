export {};
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { ObjectID } = require("mongodb");
const { getCollection } = require("./db");

const verifyToken = async (req, res, next) => {
  const collection = getCollection("users");
  const token = req.cookies.access_token;
  if (!token) return res.status(401).send("Access denied!");
  try {
    const userId = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await collection.findOne({ _id: ObjectID(userId._id) });

    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};

exports.verifyToken = verifyToken;
