const mongoose = require("mongoose");

const shortModel = mongoose.Schema({
  long: String,
  short: String,
  ownerId: String,
});

const shorts = mongoose.model("histories", shortModel);

module.exports = shorts;

