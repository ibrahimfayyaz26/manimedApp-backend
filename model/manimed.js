const mongoose = require("mongoose");

const manimed = new mongoose.Schema({
  name: { type: String, required: true },
  imageUri: { type: String, required: true },
  code: { type: String, required: true },
  size: String,
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
});

module.exports = mongoose.model("Manimed", manimed);
