const mongoose = require("mongoose");

const manimed = new mongoose.Schema({
  name: { type: String, required: true },
  imageUri: { type: String, required: true },
  code: { type: String, required: true },
  size: { type: String, required: false },
  stuff: { type: String, required: false },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  subId: { type: Number, required: true },
});

module.exports = mongoose.model("Manimed", manimed);
