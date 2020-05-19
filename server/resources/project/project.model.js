const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    catchLine: { type: String },
    summary: { type: String, required: true },
    link: { type: String, required: true },
    techStack: [{ type: String }],
    tags: [{ type: String }],
    githubLink: { type: String, required: true },
    description: { type: String, required: true },
    featured: { type: Boolean, required: true },
    readTime: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
