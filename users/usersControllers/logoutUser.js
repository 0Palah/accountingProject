const UsersService = require("../users.service");

async function logoutUser(req, res) {
  const { _id } = req.user;

  res.clearCookie("refreshToken");

  await UsersService.findUserByIdAndUpdate(_id, {
    token: "",
    refreshToken: "",
  });

  res.status(204).json();
}

module.exports = logoutUser;
