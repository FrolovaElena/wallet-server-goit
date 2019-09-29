const User = require("../db/models/userSchema");

exports.mainRoute = (req, res) => {
  res.status(200).send("Wellcome to our App");
};

exports.getAll = (req, res) => {
  User.find().then(users =>
    res
      .status(200)
      .json({ status: "success", users })
      .catch(res.status(400).json("users were not find"))
  );
};

exports.getOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(res.status(200).json({ status: "success", user }))
    .catch(res.status(400).json("user was not find"));
};

exports.create = (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  newUser
    .save()
    .then(res.status(201).json({ status: "success", user: newUser }))
    .catch(res.status(400).json("user was not create"));
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;

  User.findByIdAndUpdate(id, updatedUser)
    .then(res.status(200).json({ status: "success", user: updatedUser }))
    .catch(res.status(400).json("user was not updata"));
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  User.findById(id)
    .deleteOne()
    .then(response => res.status(201).json({ status: "success", response }))
    .catch(res.status(400).json("user was not delete"));
};
