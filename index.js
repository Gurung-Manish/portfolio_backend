const express = require("express");
const mongoose = require("mongoose");
const ExperienceModel = require("./models/experience.model.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is default getaway new");
});

app.post("/experience", async (req, res) => {
  try {
    const expereince = await ExperienceModel.create(req.body);
    res.status(200).json(expereince);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
