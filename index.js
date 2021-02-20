const express = require("express");
const app = express();
const mongoose = require("mongoose");
const manimed = require("./Router/Manimed");

app.use(express.json());

app.use("/manimed", manimed);

require("dotenv").config();

app.get("/api", (req, res) => {
  res.send("welcome to manimed api");
});

const port = process.env.PORT || 3000;
const id = process.env.USER;
const password = process.env.PASS;

mongoose
  .connect(
    `mongodb+srv://${id}:${password}@cluster0.qyuuk.mongodb.net/manimed?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((er) => {
    console.log(er);
  });
