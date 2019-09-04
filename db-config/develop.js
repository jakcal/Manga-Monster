const mongoose = require("mongoose");
assert = require("assert");

const url = "mongodb://localhost:27017/manga-monster";

mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { useNewUrlParser: true },
  (err, db) => {
      assert.equal(null, err)
      console.log("Connected successfully to database");
  }
);

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
