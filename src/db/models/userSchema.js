const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  telephone: String,
  favoriteProducts: Array,
  viewProducts: Array,
  orders: Array
});

const User = mongoose.model("UserData", userSchema);

module.exports = User;
