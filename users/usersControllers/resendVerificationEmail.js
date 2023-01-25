const { createError } = require("../../helpers/createError");
const UsersService = require("../users.service");
const sendSgEmail = require("../../helpers/sendSgEmail");

const { BASE_URL } = process.env;

async function resendVerificationEmail(req, res) {
  const { email } = req.body;

  const user = await UsersService.findOneUser({ email });

  if (!email) {
    throw createError({ status: 400, message: "Missing required field email" });
  }

  if (!user) {
    throw createError({ status: 404, message: "User not found" });
  }

  if (user.status) {
    throw createError({
      status: 400,
      message: "Verification has already been passed",
    });
  }

  const message = {
    to: email,
    subject: "Email verification",
    html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify your email</a>`,
  };

  await sendSgEmail(message);

  res.status(200).json({
    message: "Verification email sent",
  });
}

module.exports = resendVerificationEmail;
