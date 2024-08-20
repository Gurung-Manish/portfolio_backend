const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema(
  {
    projectTitle: { type: String },
    date: {
      type: Date,
    },
    description: {
      type: String,
    },
    technologies: {
      type: [String],
    },
    heroImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProjectModel = mongoose.model("Project", ProjectSchema);
module.exports = ProjectModel;
