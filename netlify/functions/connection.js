const mongoose = require("mongoose");
require("dotenv").config();

const dbName = "blackcoffer-database";
let isConnected;

const connectDB = async () => {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_CONNECT_URL, {
      dbName: dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

module.exports = {
  connectDB,
};
