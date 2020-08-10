export {};
const MongoClient = require("mongodb").MongoClient;

let db = null;

const dbInit = async (url, dbName) => {
  const client = new MongoClient(url, {
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db(dbName);
};

const getCollection = (collectionName) => {
  return db.collection(collectionName);
};
exports.dbInit = dbInit;
exports.getCollection = getCollection;
