const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomUUID } = require("crypto");
const createError = require("../helpers/createError");
const SendEmail = require("../email");
const UserMessages = require("./user.messages");

const UserModel = require("./user.model");

const { BASE_URL, JWT_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = process.env;

async function findUserById(id) {
  return UserModel.findById(id);
}

async function registerUser(dto) {
  const { password, email, role } = dto;

  const user = await findOneUser({ email });

  if (user) {
    throw createError({ status: 409, message: UserMessages.EMAIL_IN_USE });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const verificationToken = randomUUID();

  const message = {
    to: email,
    subject: "Email verification",
    html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify your email</a>`,
  };

  await SendEmail.SendSgEmail(message);

  return UserModel.create({
    hashPassword,
    email,
    role,
    verificationToken,
  });
}

async function loginUser(dto) {
  const { password, email } = dto;

  const user = await findOneUser({ email });

  if (!user) {
    throw createError({ status: 401, message: UserMessages.NOT_FOUND_USER });
  }

  if (!user.status) {
    throw createError({
      status: 401,
      message: UserMessages.VERIFY_YOUR_EMAIL,
    });
  }

  const passwordCompare = await bcrypt.compare(password, user.hashPassword);

  if (!passwordCompare) {
    throw createError({ status: 401, message: UserMessages.NOT_FOUND_USER });
  }

  const payload = {
    id: user.id,
    role: user.role,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "10d" });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET_KEY, {
    expiresIn: "30d",
  });

  return findUserByIdAndUpdate(user.id, { token, refreshToken });
}

async function findUserByIdAndUpdate(id, updateData) {
  return UserModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
}

async function findOneUser(dto) {
  return UserModel.findOne(dto);
}

async function resendVerificationEmail(email) {
  const user = await findOneUser(email);

  if (!email) {
    throw createError({ status: 400, message: "Missing required field email" });
  }

  if (!user) {
    throw createError({ status: 404, message: UserMessages.NOT_FOUND_USER });
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

  await SendEmail.SendSgEmail(message);
}

async function refreshToken(id) {
  const user = await findUserById(id);

  if (!user) {
    throw createError({ status: 401, message: UserMessages.NOT_AUTHORIZED });
  }

  const payload = {
    id: user.id,
    role: user.role,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "10d" });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET_KEY, {
    expiresIn: "30d",
  });

  return findUserByIdAndUpdate(user.id, {
    token,
    refreshToken,
  });
}

async function verifyEmail(verificationToken) {
  const user = await findOneUser({ verificationToken });

  if (!user) {
    throw new createError({
      status: 404,
      message: UserMessages.USER_NOT_FOUND_OR_VERIFIED,
    });
  }

  await findUserByIdAndUpdate(user._id, {
    status: true,
    verificationToken: "",
  });
}

module.exports = {
  findUserById,
  findUserByIdAndUpdate,
  findOneUser,
  registerUser,
  loginUser,
  resendVerificationEmail,
  verifyEmail,
  refreshToken,
};
