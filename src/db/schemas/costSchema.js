const mongoose = require("mongoose");
const { Schema } = mongoose;

const costSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  currensy: String,
  created: String,
  modified: String,
  categories: String
});

const Cost = mongoose.model("Cost", costSchema);

module.exports = Cost;
