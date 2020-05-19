const { Router } = require("express");
const router = Router();

const {
  createProject,
  getFeaturedProjects,
  getAllProjects,
} = require("./project.controller");

// api/project
router.route("/").post(createProject).get(getAllProjects);

// api/project/featured

router.route("/featured").get(getFeaturedProjects);

module.exports = router;
