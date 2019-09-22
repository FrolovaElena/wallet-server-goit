const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "UserData"
  },
  productList: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      type: String,
      itesCount: Number
    }
  ],
  deliveryType: String,
  deliveryAdress: String,
  sumToPay: Number,
  stutus: String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
