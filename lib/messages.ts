export {};
const { getCollection } = require("./db");

const getAllAvailableMessages = async () => {
  const collection = getCollection("messages");
  const allMessages = await collection.find();
  const messagesArr = await allMessages.toArray();
  return messagesArr;
};

exports.getAllAvailableMessages = getAllAvailableMessages;
