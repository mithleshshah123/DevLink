const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://mithleshshah232:sfKMVq3uxZu95578@nodejs.glvjsxz.mongodb.net/devLink"
  );
};

module.exports = connectDB;
