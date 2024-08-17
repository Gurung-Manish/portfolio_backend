const EducationModel = require("../models/education.model.js");

const getEducations = async (req, res) => {
  try {
    const educations = await EducationModel.find({});
    res.status(200).json(educations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await EducationModel.findById(id);
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addEducation = async (req, res) => {
  try {
    const education = await EducationModel.create(req.body);
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await EducationModel.findByIdAndUpdate(id, req.body);
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }

    const updatedEducation = await EducationModel.findById(id);
    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await EducationModel.findbyIdAndDelete(id);
    if (!education) {
      res.status(404).json({ message: "Education data not found" });
    }
    res.status(200).json({ message: "Education data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getEducation,
  getEducations,
  addEducation,
  updateEducation,
  deleteEducation,
};
