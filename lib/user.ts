export {};
const bcrypt = require("bcrypt");
const { getCollection } = require("./db");

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

exports.registerUser = registerUser;
