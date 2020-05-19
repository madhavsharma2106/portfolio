const { Router } = require("express");
const router = Router();

const {
  createProject,
  getFeaturedProjects,
  getAllProjects,
  getProjectById,
} = require("./project.controller");

// api/project
router.route("/").post(createProject).get(getAllProjects);

// api/project/featured
router.route("/featured").get(getFeaturedProjects);

// api/project/:id
router.route("/:id").get(getProjectById);

module.exports = router;
