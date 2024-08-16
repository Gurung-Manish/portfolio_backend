const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("This is default getaway new");
});

mongoose
  .connect(
    "mongodb+srv://manish:Thisismg007@portfoliodb.gzq3b.mongodb.net/PortfolioDB?retryWrites=true&w=majority&appName=PortfolioDB"
  )
  .then(() => {
    console.log("Connected! to database !!!");
    app.listen(3000, () => {
      console.log("server working on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect to db!!");
  });
