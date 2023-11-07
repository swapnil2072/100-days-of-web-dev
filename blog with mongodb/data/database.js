const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = MongoClient.connect("mongodb://127.0.0.1:27017");
  database = (await client).db("blog");
}

function getDb() {
  if (!database) {
    throw {
      message: "Database connection not established",
    };
  }
  return database;
}

module.export = {
  connectToDatabase: connect,
  getDb: getDb,
};
