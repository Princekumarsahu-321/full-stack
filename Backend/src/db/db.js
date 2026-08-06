const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    // await mongoose.connect(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL_ON);
    console.log(" MongoDB Connected");
    
  } catch (error) {
    console.error(" MongoDB Connection Error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;