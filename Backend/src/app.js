require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routers/signup.route");
const loginRoutes = require("./routers/login.route");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://full-stack-kpz1.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/auth", loginRoutes);

module.exports = app;