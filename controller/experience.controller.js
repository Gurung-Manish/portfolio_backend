const ExperienceModel = require("../models/experience.model.js");

const getExperiences = async (req, res) => {
  try {
    const experiences = await ExperienceModel.find({});
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await ExperienceModel.findById(id);
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addExperience = async (req, res) => {
  try {
    const experience = await ExperienceModel.create(req.body);
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExperience = async (req, res) => {
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
};

const deleteExperience = async (req, res) => {
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
};

module.exports = {
  getExperiences,
  getExperience,
  addExperience,
  updateExperience,
  deleteExperience,
};
