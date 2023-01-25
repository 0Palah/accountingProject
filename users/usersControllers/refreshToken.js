const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

const { createError } = require("../../helpers/createError");
const User = require("../../models/users");

const { JWT_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = process.env;

async function refreshToken(req, res) {
  const { id } = req.user;

  const user = await User.findById(id);

  if (!user) {
    throw createError({ status: 401, message: "Not authorized" });
  }

  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "10d" });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET_KEY, {
    expiresIn: "30d",
  });

  const userData = await User.findByIdAndUpdate(
    user.id,
    { token, refreshToken },
    { new: true }
  );

  res.cookie("refreshToken", refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // httpOnly: true,
  });
  res.json({ token, refreshToken });
}

module.exports = refreshToken;
