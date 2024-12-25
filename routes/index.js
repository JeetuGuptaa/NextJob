const express = require("express");
const router = express.Router();

const jobRoutes = require("./v1Routes/jobRoutes");

router.get("/test", async (req, res) => {
  return res.send({
    success: true,
    status: 200,
    message: "This is a test route",
    data: {},
  });
});

router.use("/v1/jobs", jobRoutes);

module.exports = router;
