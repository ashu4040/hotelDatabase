const mongoose = require("mongoose");

//define the MongoDB connections URL
const mongoURL = "mongodb://localhost:27017/hotels";

// Set up MongoDb connections
mongoose.connect(mongoURL, {});

// Get the default connection
//Mongoose maintains a default connections object represennting the mongoDB connection
const db = mongoose.connection;

// define event listener for database connection
db.on("connected", () => {
  console.log("connected");
});

db.on("error", () => {
  console.log("error");
});

db.on("disconnected", () => {
  console.log("disconnected");
});

//Export the database connection
module.exports = db;
