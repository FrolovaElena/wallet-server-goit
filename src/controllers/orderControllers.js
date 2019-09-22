const Order = require("../db/models/orderSchema");

exports.post = (req, res) => {
  const order = req.body;
  const newOrder = new Order(order);

  const sendResponse = order => {
    res.status(201);
    res.json({ status: "success", order });
  };

  const sendError = () => {
    res.status(400);
    res.json("order was not create");
  };

  newOrder
    .save()
    .then(sendResponse)
    .catch(sendError);
};

exports.getAll = (req, res) => {
  const sendResponse = orders => {
    res.status(200);
    res.json({ status: "success", orders });
  };

  const sendError = () => {
    res.status(400);
    res.json("orders were not find");
  };
  Order.find()
    .then(sendResponse)
    .catch(sendError);
};

exports.getOne = (req, res) => {
  const id = req.params.id;

  const sendResponse = order => {
    res.status(200);
    res.json({ status: "success", order });
  };

  const sendError = () => {
    res.status(400);
    res.json("order was not find");
  };

  Order.findById(id)
    .then(sendResponse)
    .catch(sendError);
};

exports.update = (req, res) => {
  const id = req.params.id;
  const order = req.body;

  const sendResponse = order => {
    res.status(201);
    res.json({ status: "success", order });
  };

  const sendError = () => {
    res.status(400);
    res.json("order was not updata");
  };

  Order.findByIdAndUpdate(id, order, {
    new: true
  })
    .then(sendResponse)
    .catch(sendError);
};
