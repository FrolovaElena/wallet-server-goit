const mongoose = require("mongoose");

const connectToDB = dbUrl => {
  mongoose
    .connect(dbUrl, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
      console.log("Database connection succesfull");
    })
    .catch(() => {
      console.log("Database connection error");
    });
};

module.exports = connectToDB;
