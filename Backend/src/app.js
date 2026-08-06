require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

// Routes
const authRoutes = require("./routers/signup.route");
const loginRoutes = require("./routers/login.route");

const app = express();

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://full-stack-delta-ebon.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/auth", loginRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, "../public")));

// React routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = app;