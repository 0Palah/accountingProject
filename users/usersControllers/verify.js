const UserMessages = require("../user.messages");
const UsersService = require("../users.service");

async function verify(req, res) {
  const { verificationToken } = req.params;

  await UsersService.verifyEmail(verificationToken);

  res.status(200).json({
    message: UserMessages.VERIFICATION_SUCCESSFUL,
  });
}

module.exports = verify;
