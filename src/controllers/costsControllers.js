const Cost = require("../db/schemas/costSchema");

exports.mainRoute = (req, res) => {
  res.status(200).send("Wellcome to our App");
};

exports.getAll = (req, res) => {
  const response = cost => {
    res.status(200);
    res.json(cost);
  };
  Cost.find()
    .then(response)
    .catch(err => console.log(err));
};

exports.getOne = (req, res) => {
  const id = req.params.id;
  const response = cost => {
    res.json(cost);
  };

  Cost.findById(id)
    .then(response)
    .catch(err => console.log(err));
};

exports.create = (req, res) => {
  const cost = req.body;
  const newCost = new Cost(cost);

  const response = cost => {
    res.json(cost);
  };

  newCost
    .save()
    .then(response)
    .catch(err => console.log(err));
};

exports.update = (req, res) => {
  const id = req.params.id;
  const cost = req.body;

  const response = cost => {
    res.status(200);
    res.json(cost);
  };

  Cost.findByIdAndUpdate(id, cost, {
    new: true
  })
    .then(response)
    .catch(err => console.log(err));
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  const response = cost => {
    res.status(200);
    res.json(cost);
  };
  Cost.findById(id)
    .deleteOne()
    .then(response)
    .catch(err => console.log(err));
};
