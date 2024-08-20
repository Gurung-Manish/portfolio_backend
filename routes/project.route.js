const express = require("express");
const router = express.Router();

const {
  getProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
} = require("../controller/project.controller.js");

router.get("/", getProjects);

router.get("/:id", getProject);

router.post("/", addProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

module.exports = router;
