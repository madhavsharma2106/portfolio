const { Router } = require("express");
const router = Router();

const { createProject } = require("./project.controller");

// api/project
router.route("/").post(createProject);

module.exports = router;
