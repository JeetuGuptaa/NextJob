const mongoose = require("mongoose");
const JobsSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
    },
    responsibilities: {
      type: [String],
    },
    salary: {
      type: String,
    },
    location: {
      type: String,
    },
    jobType: {
      type: String,
    },
    workMode: {
      type: String,
    },
    company: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    datePosted: {
      type: Date,
    },
    applyLink: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const jobsModel = mongoose.model("jobs", JobsSchema);
module.exports = jobsModel;
