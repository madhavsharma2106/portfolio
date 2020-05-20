const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    summary: { type: String, required: true },
    tags: [{ type: String }],
    body: { type: String, required: true },
    featured: { type: Boolean, required: true },
    readTime: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("blog", blogSchema);
