const Product = require("../db/models/productSchema");

exports.getAll = (req, res) => {
  const sendResponse = products => {
    res.status(200);
    res.json({ status: "success", products });
  };

  const sendError = () => {
    res.status(400);
    res.json("products were not find");
  };
  Product.find()
    .then(sendResponse)
    .catch(sendError);
};

exports.getOne = (req, res) => {
  const id = req.params.id;

  const sendResponse = product => {
    res.status(200);
    res.json({ status: "success", product });
  };

  const sendError = () => {
    res.status(400);
    res.json("product was not find");
  };

  Product.findById(id)
    .then(sendResponse)
    .catch(sendError);
};

exports.create = (req, res) => {
  const product = req.body;
  const newProduct = new Product(product);

  const sendResponse = data => {
    res.status(201);
    res.json({ status: "success", data });
  };

  const sendError = () => {
    res.status(400);
    res.json("user was not create");
  };

  newProduct
    .save()
    .then(sendResponse)
    .catch(sendError);
};

exports.update = (req, res) => {
  const id = req.params.id;
  const product = req.body;

  const sendResponse = product => {
    res.status(201);
    res.json({ status: "success", product });
  };

  const sendError = () => {
    res.status(400);
    res.json("product was not updata");
  };

  Product.findByIdAndUpdate(id, product, {
    new: true
  })
    .then(sendResponse)
    .catch(sendError);
};
