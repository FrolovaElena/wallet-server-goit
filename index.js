const express = require("express");
const app = express();
const costs = require("./src/bd/all-costs.json");

app.get("/", (req, res, next) => {
  res.status(200).send("Wellcome to our App");
});

app.get("/costs", (req, res, next) => {
  const category = req.query.category;
  const allCurrentCategories = costs.map(cost => {
    const [category] = cost.categories;
    return category;
  });
  const filteredCosts = costs.filter(cost => {
    const [categories] = cost.categories;
    return categories === category;
  });

  if (!category) res.status(200).send({ status: "success", products: costs });

  allCurrentCategories.includes(category)
    ? res.status(200).json({ status: "success", products: filteredCosts })
    : res.status(404).send({ status: "no products", products: [] });
});

app.get("/costs/:id", (req, res, next) => {
  const findedCost = costs.find(cost => cost.id === Number(req.params.id));
  res.status(200).json({ status: "success", products: findedCost });
});

app.listen(3001, () => {
  console.log("server is running!");
});
