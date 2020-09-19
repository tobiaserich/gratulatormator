export {};
const { getCollection } = require("./db");
const jwt = require("jsonwebtoken");

const addBirthday = async (data, cookie) => {
  const collection = getCollection("birthdays");
  const birthdayData = data;
  birthdayData.owner = jwt.verify(cookie, process.env.TOKEN_SECRET)._id;
  collection.insertOne(birthdayData);
};

exports.addBirthday = addBirthday;
