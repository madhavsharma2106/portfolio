const { Router } = require("express");
const router = Router();

const {
  createBlog,
  getFeaturedBlogs,
  getAllBlogs,
  getBlogById,
} = require("./blog.controller");

// api/blog
router.route("/").post(createBlog).get(getAllBlogs);

// api/blog/featured
router.route("/featured").get(getFeaturedBlogs);

// api/blog/:id
router.route("/:id").get(getBlogById);

module.exports = router;
