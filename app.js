require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const passport = require("passport");
const rootRoutes = require("./app/src/routes/rootRoutes");
const { connectToDatabase } = require("./app/config/db");

const app = express();
app.use(helmet());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(passport.initialize());
app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));

// Routes
app.use("/api", rootRoutes);

// Handle root route
app.use("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: { env: process.env.NODE_ENV } });
});

async function startServer() {
  try {
    await connectToDatabase();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
