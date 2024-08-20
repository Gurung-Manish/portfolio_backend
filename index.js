const express = require("express");
const mongoose = require("mongoose");
const experienceRoute = require("./routes/experience.route.js");
const educationRoute = require("./routes/education.route.js");
const projectRoute = require("./routes/project.route.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("This is default getaway new");
});

//routes middle
app.use("/api/experiences", experienceRoute);

app.use("/api/educations", educationRoute);

app.use("/api/projects", projectRoute);

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
