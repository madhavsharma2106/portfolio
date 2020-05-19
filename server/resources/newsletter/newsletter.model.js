const mongoose = require("mongoose");

const newsLetterSchema = new mongoose.Schema(
  {
    emailId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("NewsLetter", newsLetterSchema);
