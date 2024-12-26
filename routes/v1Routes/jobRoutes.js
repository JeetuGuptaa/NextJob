const express = require("express");
const router = express.Router();

const { createJob, getJobBySlug } = require("../../controllers/jobController");

router.post("/create", createJob);
router.get("/:slug", getJobBySlug);

module.exports = router;
