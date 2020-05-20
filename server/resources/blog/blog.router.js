const { Router } = require("express");
const { protect } = require("../../utils/auth");
const router = Router();

const {
  createBlog,
  getFeaturedBlogs,
  getAllBlogs,
  getBlogById,
} = require("./blog.controller");

// api/blog
router.route("/").get(getAllBlogs);
router.post("/", protect, createBlog);

// api/blog/featured
router.route("/featured").get(getFeaturedBlogs);

// api/blog/:id
router.route("/:id").get(getBlogById);

module.exports = router;
