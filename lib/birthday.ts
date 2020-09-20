export {};
const { getCollection } = require("./db");
const jwt = require("jsonwebtoken");

const addBirthday = async (data, cookie) => {
  const collection = getCollection("birthdays");
  const birthdayData = data;
  birthdayData.owner = jwt.verify(cookie, process.env.TOKEN_SECRET)._id;
  const birthdayValidation = await collection.findOne(birthdayData);

  if (!birthdayValidation) {
    collection.insertOne(birthdayData);
    return 200;
  } else {
    return 409;
  }
};

exports.addBirthday = addBirthday;
