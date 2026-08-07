const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Check required fields
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check duplicate email
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    console.log("✅ Saved User:", user);

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,      // false if testing on localhost
      sameSite: "None",  // "Lax" if localhost
    });

    // Response
    return res.status(201).json({
      message: "User registered successfully",
      user,
      token,
    });

  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = { registerUser };