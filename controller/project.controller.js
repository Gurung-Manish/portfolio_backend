const ProjectModel = require("../models/project.model.js");

const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProject = async (req, res) => {
  try {
    const project = await ProjectModel.create(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findByIdAndUpdate(id, req.body);
    if (!project) {
      return res.status(404).json({ message: "Project not found!!!" });
    }

    const updatedProject = await ProjectModel.findById(id);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findByIdAndDelete(id);
    if (!project) {
      return res.status(505).json({ message: "project was not found!!!" });
    }
    res.status(404).json({ message: "Project Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
};
