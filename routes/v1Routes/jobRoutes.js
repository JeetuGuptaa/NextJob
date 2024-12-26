const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobBySlug,
  isSlugAvailable,
} = require("../../controllers/jobController");

router.post("/create", createJob);
router.get("/:slug", getJobBySlug);
router.get("/verify-slug/:slug", isSlugAvailable);

module.exports = router;
