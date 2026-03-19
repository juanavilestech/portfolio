const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/projects", projectController.getProjects);
router.get("/project/:id", projectController.getProjectById);
router.post("/contact", projectController.contact);

module.exports = router;
