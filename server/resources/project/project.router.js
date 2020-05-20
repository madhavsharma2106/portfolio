const { Router } = require("express");
const { protect } = require("../../utils/auth");
const router = Router();

const {
  createProject,
  getFeaturedProjects,
  getAllProjects,
  getProjectById,
} = require("./project.controller");

// api/project
router.route("/").get(getAllProjects);
router.post("/", protect, createProject);

// api/project/featured
router.route("/featured").get(getFeaturedProjects);

// api/project/:id
router.route("/:id").get(getProjectById);

module.exports = router;
