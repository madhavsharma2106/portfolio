const Project = require("./project.model");

const createProject = async (req, res) => {
  const { body } = req;
  try {
    const response = await Project.create(body);
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

const getFeaturedProjects = async (req, res) => {
  try {
    const featuredProjects = await Project.find({ featured: true }).select([
      "title",
      "_id",
      "catchLine",
      "summary",
      "readTime",
      "link",
    ]);
    res.status(200).json(featuredProjects);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().select([
      "title",
      "_id",
      "catchLine",
      "summary",
      "readTime",
      "link",
    ]);
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProjectById = async (req, res) => {
  const id = req.params.id;
  try {
    const project = await Project.findById(id);
    res.status(200).json(project);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createProject,
  getFeaturedProjects,
  getAllProjects,
  getProjectById,
};
