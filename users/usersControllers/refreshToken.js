const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UsersService = require("../users.service");
const UserMessages = require("../user.messages");

async function refreshToken(req, res) {
  const { id } = req.user;

  const { token, refreshToken } = await UsersService.refreshToken(id);

  res.cookie("refreshToken", refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.json({
    message: UserMessages.TOKEN_REFRESHED,
    data: { token },
  });
}

module.exports = refreshToken;
