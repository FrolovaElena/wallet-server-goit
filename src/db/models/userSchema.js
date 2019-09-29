const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fistName: {
    type: String,
    require: true
  },
  lastName: String,
  password: {
    type: String
  },
  email: {
    type: String,
    email: true
  },
  incomes: Array,
  costs: Array
});

const User = mongoose.model("UserData", userSchema);

module.exports = User;
