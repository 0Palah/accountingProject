const bcrypt = require("bcryptjs");
const { randomUUID } = require("crypto");
const createError = require("../helpers/createError");

const UserModel = require("./auth.model");

async function findUserById(id) {
  return UserModel.findById(id);
}

async function registerUser(dto) {
  const { password, email } = dto;

  const user = await findOneUser({ email });

  if (user) {
    throw createError({ status: 409, message: "Email in use" });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const verificationToken = randomUUID();

  return UserModel.create({
    password: hashPassword,
    email,
    verificationToken,
  });
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
};
// 1FDK7xRFHUN8Gc1o
