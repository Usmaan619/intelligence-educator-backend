const express = require("express");
const Feedback = require("../models/feedbackModel");

const router = express();
// Create a new customer
router.post("/create/feedback", async (req, res, next) => {
  try {
    const feedback = await Feedback.create(req?.body);

    res.status(201).json({ feedback, sucess: true });
  } catch (error) {
    res.status(500).json({ error: error.message, sucess: false });
  }
});

// Get all customers
router.get("/getAllFeedback", async (req, res, next) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.status(200).json({ feedbacks, sucess: true });
  } catch (error) {
    res.status(500).json({ error: error.message, sucess: false });
  }
});

module.exports = router;
