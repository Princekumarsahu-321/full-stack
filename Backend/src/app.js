require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const authRoutes = require("./routers/signup.route");
const loginRoutes = require("./routers/login.route");

const app = express();

// =========================
// CORS
// =========================
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://full-stack-kpz1.vercel.app",
    ],
    credentials: true,
  })
);

// =========================
// Middleware
// =========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// =========================
// API Routes
// =========================
app.use("/api/auth", authRoutes);
app.use("/api/auth", loginRoutes);

// =========================
// Serve React Frontend
// =========================
app.use(express.static(path.join(__dirname, "../public")));

// React Router fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;