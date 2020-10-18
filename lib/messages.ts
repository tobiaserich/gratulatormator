export {};
const { getCollection } = require("./db");

const getAllAvailableMessages = async (category) => {
  const collection = getCollection("messages");
  const allMessages = await collection.find({ category });
  const messagesArr = await allMessages.toArray();
  return messagesArr;
};

exports.getAllAvailableMessages = getAllAvailableMessages;
