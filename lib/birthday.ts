export {};
const { getCollection } = require("./db");
const jwt = require("jsonwebtoken");

const addBirthday = async (data, cookie) => {
  const collection = getCollection("birthdays");
  const birthdayData = data;
  birthdayData.owner = jwt.verify(cookie, process.env.TOKEN_SECRET)._id;
  const birthdayValidation = await collection.findOne(birthdayData);
  try {
    if (!birthdayValidation) {
      collection.insertOne(birthdayData);
      return 200;
    } else {
      throw 409;
    }
  } catch (error) {
    return error;
  }
};

const getAllBirthdays = async (cookie) => {
  const collection = getCollection("birthdays");
  const birthdayOwner = jwt.verify(cookie, process.env.TOKEN_SECRET)._id;
  const cursor = await collection.find({ owner: birthdayOwner });
  const birthdays = await cursor.toArray();
  return birthdays;
};

exports.addBirthday = addBirthday;
exports.getAllBirthdays = getAllBirthdays;
