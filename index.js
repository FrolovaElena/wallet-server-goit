const express = require("express");
const app = express();
const { port, url } = require("./config");
const connectToDB = require("./src/db/connectToDB");
const userControllers = require("./src/controllers/userControllers");
const productControllers = require("./src/controllers/productControllers");
const orderControllers = require("./src/controllers/orderControllers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", userControllers.mainRoute);

app.get("/users", userControllers.getAll);

app.get("/users/:id", userControllers.getOne);

app.post("/users", userControllers.create);

app.put("/users/:id", userControllers.update);

app.delete("/users/:id", userControllers.delete);

app.get("/products", productControllers.getAll);

app.get("/products/:id", productControllers.getOne);

app.post("/products", productControllers.create);

app.put("/products/:id", productControllers.update);

app.get("/orders", orderControllers.getAll);

app.get("/orders/:id", orderControllers.getOne);

app.post("/orders", orderControllers.post);

app.put("/orders/:id", orderControllers.update);

app.listen(port, () => {
  console.log("server is running!");
});

connectToDB(url);
