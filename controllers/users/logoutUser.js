const User = require("../../models/users");

async function logoutUser(req, res) {
  const { _id } = req.user;

  res.clearCookie("refreshToken");

  await User.findByIdAndUpdate(_id, { token: "", refreshToken: "" });

  res.status(204).json({
    message: "No Content",
  });
}

module.exports = logoutUser;
