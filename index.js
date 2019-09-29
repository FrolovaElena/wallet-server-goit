const express = require("express");
const app = express();
const { port, url } = require("./config");
const userControllers = require("./src/controllers/userControllers");
const transactionControllers = require("./src/controllers/transactionControllers");
const connectToDB = require("./src/db/connectToDB");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", userControllers.mainRoute);

app.get("/users", userControllers.getAll);

app.get("/users/:id", userControllers.getOne);

app.post("/users", userControllers.create);

app.put("/users/:id", userControllers.update);

app.delete("/users/:id", userControllers.delete);

app.get("/transactions", transactionControllers.getAll);

app.get("/transactions/:userId", transactionControllers.getAllByUserId);

app.get(
  "/transactions/incomes/:userId",
  transactionControllers.getIncomesByUserId
);

app.get("/transactions/costs/:userId", transactionControllers.getCostsByUserId);

app.post("/transactions", transactionControllers.create);

app.delete("/transactions/:id", transactionControllers.delete);

app.put("/transactions/:id", transactionControllers.update);

app.listen(port, () => {
  console.log("server is running!");
});

connectToDB(url);
