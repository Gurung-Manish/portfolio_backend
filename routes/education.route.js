const express = require("express");
const router = express.Router();
const {
  getEducation,
  getEducations,
  addEducation,
  updateEducation,
  deleteEducation,
} = require("../controller/education.controller.js");

router.get("/", getEducations);

router.get("/:id", getEducation);

router.post("/", addEducation);

router.put("/", updateEducation);

router.delete("/:id", deleteEducation);

module.export = router;
