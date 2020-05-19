const Blog = require("./blog.model");

const createBlog = async (req, res) => {
  const { body } = req;
  try {
    const response = await Blog.create(body);
    return res.status(200).json(response);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError")
      return res.status(400).json(err.message);

    if (err.code === 11000) {
      const key = Object.keys(err.keyValue);
      const value = err.keyValue[key];
      return res
        .status(400)
        .json({ message: `The ${key}: ${value} already exists ` });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getFeaturedBlogs = async (req, res) => {
  try {
    const featuredBlogs = await Blog.find({ featured: true }).select([
      "title",
      "_id",
      "summary",
      "readTime",
    ]);
    res.status(200).json(featuredBlogs);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().select([
      "title",
      "_id",
      "summary",
      "readTime",
    ]);
    res.status(200).json(blogs);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createBlog,
  getFeaturedBlogs,
  getAllBlogs,
  getBlogById,
};
