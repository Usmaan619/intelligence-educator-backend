const express = require("express");
const { errorHandler } = require("../utils/errorHandler");

const router = express.Router();

router.use("/c", require("../controllers/feedbackController"));
router.use("/f", require("../controllers/coursesController"));


// catch api all errors
router.use(errorHandler);

module.exports = router;
