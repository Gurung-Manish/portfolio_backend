const express = require("express");
const mongoose = require("mongoose");
const ExperienceModel = require("./models/experience.model.js");
const e = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.get("/experience", async (req, res) => {
  try {
    const experiences = await ExperienceModel.find({});
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/experience/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await ExperienceModel.findById(id);
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/experience/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await ExperienceModel.findByIdAndUpdate(id, req.body);

    if (!experience) {
      return res.status(404).json({ message: "Experience Not Found" });
    }

    const updatedExperience = await ExperienceModel.findById(id);
    res.status(200).json(updatedExperience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/experience/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await ExperienceModel.findByIdAndDelete(id);
    if (!experience) {
      return res.status(404).json({ message: "Data Not Found" });
    }
    res.status(200).json({ message: "Experience Deleted" });
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
