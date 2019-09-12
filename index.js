const express = require("express");
const app = express();
const { port, url } = require("./config");
const connectToDB = require("./src/db/connectToDB");
const costControllers = require("./src/controllers/costsControllers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", costControllers.mainRoute);

app.get("/costs", costControllers.getAll);

app.get("/costs/:id", costControllers.getOne);

app.post("/costs", costControllers.create);

app.patch("/costs/:id", costControllers.update);

app.delete("/costs/:id", costControllers.delete);

app.listen(port, () => {
  console.log("server is running!");
});

connectToDB(url);
