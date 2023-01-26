const UserMessages = require("../user.messages");

async function getCurrentUser(req, res) {
  const { role, email } = req.user;

  res.json({
    message: UserMessages.CURRENT_USER,
    data: {
      email,
      role,
    },
  });
}

module.exports = getCurrentUser;
