const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobBySlug,
  isSlugAvailable,
  getAllJobs,
  incrementJobViews,
} = require("../../controllers/jobController");

router.post("/create", createJob);
router.get("/all-jobs", getAllJobs);
router.get("/verify-slug/:slug", isSlugAvailable);
router.get("/increment-views/:slug", incrementJobViews);
router.get("/:slug", getJobBySlug);

module.exports = router;
