const express = require("express");
const router = express.Router();
const {
  getExperiences,
  getExperience,
  addExperience,
  updateExperience,
  deleteExperience,
} = require("../controller/experience.controller.js");

router.get("/", getExperiences);

router.get("/:id", getExperience);

router.post("/", addExperience);

router.put("/:id", updateExperience);

router.delete("/:id", deleteExperience);

module.exports = router;
