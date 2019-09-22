const User = require("../db/models/userSchema");

exports.mainRoute = (req, res) => {
  res.status(200).send("Wellcome to our App");
};

exports.getAll = (req, res) => {
  const sendResponse = users => {
    res.status(200);
    res.json({ status: "success", users });
  };

  const sendError = () => {
    res.status(400);
    res.json("users were not find");
  };
  User.find()
    .then(sendResponse)
    .catch(sendError);
};

exports.getOne = (req, res) => {
  const id = req.params.id;

  const sendResponse = user => {
    res.status(200);
    res.json({ status: "success", user });
  };

  const sendError = () => {
    res.status(400);
    res.json("user was not find");
  };

  User.findById(id)
    .then(sendResponse)
    .catch(sendError);
};

exports.create = (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  const sendResponse = user => {
    res.status(201);
    res.json({ status: "success", user });
  };

  const sendError = () => {
    res.status(400);
    res.json("user was not create");
  };

  newUser
    .save()
    .then(sendResponse)
    .catch(sendError);
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;

  const sendResponse = user => {
    res.status(201);
    res.json({ status: "success", user });
  };

  const sendError = () => {
    res.status(400);
    res.json("user was not updata");
  };

  User.findByIdAndUpdate(id, updatedUser, {
    new: true
  })
    .then(sendResponse)
    .catch(sendError);
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  const sendResponse = user => {
    res.status(200);
    res.json({ status: "success", user });
  };

  const sendError = () => {
    res.status(400);
    res.json("user was delete");
  };

  User.findById(id)
    .deleteOne()
    .then(sendResponse)
    .catch(sendError);
};
