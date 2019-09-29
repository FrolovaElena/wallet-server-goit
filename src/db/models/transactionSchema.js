const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "UserData"
    },
    type: {
      type: String,
      enum: ["income", "cost"]
    },
    amount: {
      type: Number
    },
    comments: {
      type: String,
      trim: true
    },
    balanceAfter: {
      type: Number
    },
    category: {
      type: String,
      enum: [
        "Обязательные расходы",
        "Здоровье",
        "Дети",
        "Еда",
        "Машина",
        "Образование",
        "Досуг",
        "Дом",
        "Прочее"
      ]
    }
  },
  { timestamp: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
