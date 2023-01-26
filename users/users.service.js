const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomUUID } = require("crypto");
const createError = require("../helpers/createError");
const SendEmail = require("../email");
const UserMessages = require("./user.messages");

const { BASE_URL, JWT_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = process.env;

const UserModel = require("./user.model");

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

module.exports = {
  findUserById,
  findUserByIdAndUpdate,
  findOneUser,
  registerUser,
  loginUser,
};
