const Transaction = require("../db/models/transactionSchema");
const User = require("../db/models/userSchema");

exports.create = (req, res) => {
  const transaction = req.body;

  const newTransaction = new Transaction(transaction);

  newTransaction
    .save()
    .then(transaction => {
      if (transaction.type === "income")
        return User.findByIdAndUpdate(transaction.userId, {
          $push: { incomes: newTransaction._id }
        });

      if (transaction.type === "cost")
        return User.findByIdAndUpdate(transaction.userId, {
          $push: { costs: newTransaction._id }
        });
    })
    .then(
      res.status(200).json({ status: "success", transaction: newTransaction })
    )
    .catch(res.status(400).json("transactions was not create"));
};

exports.getAll = (req, res) => {
  Transaction.find().then(transactions =>
    res
      .status(200)
      .json({ status: "success", transactions })
      .catch(res.status(400).json("transactions were not find"))
  );
};

exports.getAllByUserId = (req, res) => {
  const userId = req.params.userId;
  console.log("userId", userId);
  User.findById(userId).then(user => {
    const { incomes, costs } = user;
    user
      ? res
          .status(200)
          .json({ status: "success", transactions: { incomes, costs } })
      : res.status(404).json("transactions were not find");
  });
};

exports.getIncomesByUserId = (req, res) => {
  const userId = req.params.userId;
  console.log("userId", userId);
  User.findById(userId).then(user => {
    const { incomes } = user;
    user
      ? res.status(200).json({ status: "success", incomes })
      : res.status(404).json("transactions were not find");
  });
};

exports.getCostsByUserId = (req, res) => {
  const userId = req.params.userId;
  console.log("userId", userId);
  User.findById(userId).then(user => {
    const { costs } = user;
    user
      ? res.status(200).json({ status: "success", costs })
      : res.status(404).json("transactions were not find");
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const transaction = req.body;

  Transaction.findByIdAndUpdate(id, transaction, {
    new: true
  }).then(transaction =>
    res
      .status(200)
      .json({ status: "success", transaction })
      .catch(res.status(400).json("transaction was not update"))
  );
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Transaction.findById(id)
    .deleteOne()
    .then(response => res.status(200).json({ status: "success", response }));
};
