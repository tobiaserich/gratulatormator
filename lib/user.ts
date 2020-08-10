export {};
const bcrypt = require("bcrypt");
const { getCollection } = require("./db");

const registerUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;
  const collection = getCollection("users");
  const result = await collection.insert(data);
  console.log(result);
};

exports.registerUser = registerUser;
