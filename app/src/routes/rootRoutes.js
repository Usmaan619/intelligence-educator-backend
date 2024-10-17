const express = require("express");
const { errorHandler } = require("../utils/errorHandler");
const { authMiddleware } = require("../middleware/authMiddleware");
const { getCustomerById } = require("../controllers/customerController");

const router = express.Router();

router.use("/customer", require("../controllers/customerController"));

// catch api all errors
router.use(errorHandler);

module.exports = router;
