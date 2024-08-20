const mongoose = require("mongoose");
const EducationSchema = mongoose.Schema(
  {
    institution: {
      type: String,
    },
    degree: {
      type: String,
    },
    place: {
      type: String,
    },
    score: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  { typestamps: true }
);

const EducationModel = mongoose.model("Education", EducationSchema); //this creates collection name in db
module.exports = EducationModel;
