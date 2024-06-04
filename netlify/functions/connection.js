const mongoose = require("mongoose");
require("dotenv").config();

const dbName = "blackcoffer-database";
const connection = mongoose.connect(process.env.MONGO_CONNECT_URL, {
  dbName: dbName,
});

module.exports = {
  connection,
};
