const mongoose = require("mongoose");

const ExpereinceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Enter Job Title"],
    },
    company: {
      type: String,
      required: [true, "Enter Company Name"],
      //default: "here" this is how to set a default value
    },
    location: {
      type: String,
      required: true,
    },
    joinedDate: {
      type: Date,
      required: true,
    },
    finishedDate: {
      type: Date,
    },
    description: {
      type: [String], // Array of strings to store bullet points
      required: true, // Make it required if every experience must have a description
    },
  },
  { timestamps: true }
);

const ExperienceModel = mongoose.model("Experience", ExpereinceSchema);
module.exports = ExperienceModel;
