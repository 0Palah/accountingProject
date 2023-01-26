const { createError } = require("../helpers");

const RoleModel = require("./roles.model");

async function getAllRoles() {
  return RoleModel.find();
}
async function findRoleById(id) {
  return RoleModel.findById(id);
}
async function findRoleByName(name) {
  return RoleModel.findOne(name);
}
async function createRole(dto) {
  const { name } = dto;

  const role = await findRoleByName({ name });

  if (role) {
    throw createError({ status: 409, message: "Role already exist" });
  }

  return RoleModel.create({ name });
}
async function updateRoleById(id, updateData) {
  return RoleModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
}

module.exports = {
  getAllRoles,
  findRoleById,
  findRoleByName,
  createRole,
  updateRoleById,
};
