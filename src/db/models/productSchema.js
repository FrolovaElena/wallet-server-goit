const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  categories: String,
  likes: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
