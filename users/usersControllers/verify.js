const UserMessages = require("../user.messages");
const UsersService = require("../users.service");
// const createError = require("../../helpers/createError");
// const UserModel = require("../user.model");

async function verify(req, res) {
  const { verificationToken } = req.params;

  await UsersService.verifyEmail(verificationToken);

  res.status(200).json({
    message: UserMessages.VERIFICATION_SUCCESSFUL,
  });
}

module.exports = verify;
