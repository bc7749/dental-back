const mongoose = require("mongoose");
const exportConfig = require("../../configs/exportConfig");
const Schema = mongoose.Schema;

const SubjectSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { ...exportConfig, timestamps: true }
);

module.exports = mongoose.model("Subject", SubjectSchema);
