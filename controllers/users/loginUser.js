const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

const { createError } = require("../../helpers/createError");
const User = require("../../models/users");

const { JWT_SECRET_KEY } = process.env;
const { JWT_REFRESH_SECRET_KEY } = process.env;

async function loginUser(req, res) {
  const { password, email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw createError({ status: 401, message: "Email or password is wrong" });
  }

  if (!user.status) {
    throw createError({
      status: 401,
      message: "User not verified. Please verify you email",
    });
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw createError({ status: 401, message: "Email or password is wrong" });
  }

  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "10d" });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET_KEY, {
    expiresIn: "30d",
  });

  await User.findByIdAndUpdate(user.id, { token, refreshToken }, { new: true });

  res.cookie("refreshToken", refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  res.json({ token, refreshToken });
}
module.exports = loginUser;
