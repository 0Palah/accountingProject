const RolesService = require("./roles.service");
const RolesMessages = require("./roles.messages");
const { createError } = require("../helpers");

async function createRole(req, res) {
  const newRole = {
    ...req.body,
  };

  console.log("newTransaction", newRole);

  const createdRole = await RolesService.createRole(newRole);

  if (!createdRole) {
    throw createError({ status: 404 });
  }

  res.status(201).json({
    message: RolesMessages.CREATING_SUCCESS,
    data: createdRole,
  });
}

async function getAllRoles(req, res) {
  const allRoles = await RolesService.getAllRoles();

  if (allRoles.length === 0) {
    throw createError({ status: 404 });
  }

  res.status(201).json({
    message: RolesMessages.NOT_FOUND_ROLE,
    data: allRoles,
  });
}

module.exports = {
  createRole,
  getAllRoles,
};
