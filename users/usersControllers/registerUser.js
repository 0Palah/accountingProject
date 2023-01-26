const UsersService = require("../users.service");
const UserMessages = require("../user.messages");

async function registerUser(req, res) {
  const { password, email } = req.body;

  const result = await UsersService.registerUser({ password, email });

  res.status(201).json({
    message: UserMessages.CREATING_SUCCESS,
    data: {
      email: result.email,
      role: result.role,
    },
  });
}

module.exports = registerUser;
