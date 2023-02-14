const mongoose = require("mongoose");
require("dotenv").config();

const mongoDbUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
module.exports = mongoose
  .connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to Mongo database successfully");
  })
  .catch(() => {
    console.log("Failed to connect to Mongo database");
    process.exit();
  });
