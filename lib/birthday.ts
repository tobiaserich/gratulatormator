export {};
const { getCollection } = require("./db");
const jwt = require("jsonwebtoken");
const { ObjectID } = require("mongodb");

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

const getBirthday = async (birthdayID, cookie) => {
  const collection = getCollection("birthdays");
  const birthdayOwner = jwt.verify(cookie, process.env.TOKEN_SECRET)._id;
  try {
    const birthday = await collection.findOne({
      owner: birthdayOwner,
      _id: ObjectID(birthdayID),
    });
    if (!birthday) {
      throw 404;
    } else {
      return birthday;
    }
  } catch (error) {
    return error;
  }
};

const deleteBirthday = async (birthdayID, cookie) => {
  const collection = getCollection("birthdays");
  const owner = jwt.verify(cookie, process.env.TOKEN_SECRET)._id;
  try {
    const deleteBirthday = await collection.deleteOne({
      owner: owner,
      _id: ObjectID(birthdayID),
    });
    throw 200;
  } catch (error) {
    return error;
  }
};

const updateRemindMe = async (body, cookie) => {
  const collection = getCollection("birthdays");
  const owner = jwt.verify(cookie, process.env.TOKEN_SECRET)._id;
  try {
    const update = collection.updateOne(
      { owner: owner, _id: ObjectID(body.id) },
      { $set: { remindMe: body.remindMeValue } }
    );
  } catch (error) {}
  return;
};

const updateRemindMeDays = async (body, cookie) => {
  const collection = getCollection("birthdays");
  const owner = jwt.verify(cookie, process.env.TOKEN_SECRET)._id;
  try {
    const update = collection.updateOne(
      { owner: owner, _id: ObjectID(body.id) },
      { $set: { remindMeDays: body.remindMeDays } }
    );
  } catch (error) {}
  return;
};

exports.addBirthday = addBirthday;
exports.getAllBirthdays = getAllBirthdays;
exports.getBirthday = getBirthday;
exports.deleteBirthday = deleteBirthday;
exports.updateRemindMe = updateRemindMe;
exports.updateRemindMeDays = updateRemindMeDays;
