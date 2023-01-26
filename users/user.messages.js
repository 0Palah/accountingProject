const EMAIL_IN_USE = `Email in use`;

const NOT_VERIFY_EMAIL = (email) =>
  `User with email${email}. Please verify you email`;

const NOT_FOUND_USER = "Email or password is wrong";

const CREATING_SUCCESS = "User created successfully";

const CURRENT_USER = "Current user";

const VERIFY_YOUR_EMAIL = "User not verified. Please verify your email";

const LOGGED_IN = "User is logged in";

const USER_NOT_FOUND_OR_VERIFIED = "User not found or already verified";

const VERIFICATION_SUCCESSFUL = "Verification successful";

const NOT_AUTHORIZED = "Not authorized";

const TOKEN_REFRESHED = "Token was successfully refreshed";

module.exports = {
  EMAIL_IN_USE,
  NOT_VERIFY_EMAIL,
  CREATING_SUCCESS,
  NOT_FOUND_USER,
  CURRENT_USER,
  VERIFY_YOUR_EMAIL,
  LOGGED_IN,
  USER_NOT_FOUND_OR_VERIFIED,
  VERIFICATION_SUCCESSFUL,
  NOT_AUTHORIZED,
  TOKEN_REFRESHED,
};
