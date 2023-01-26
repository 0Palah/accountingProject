const UsersService = require("../users.service");
const UserMessages = require("../user.messages");

async function loginUser(req, res) {
  const { password, email } = req.body;

  const { token, refreshToken } = await UsersService.loginUser({
    password,
    email,
  });

  res.cookie("refreshToken", refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.json({
    message: UserMessages.LOGGED_IN,
    data: {
      token,
    },
  });
}
module.exports = loginUser;
