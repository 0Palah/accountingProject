const express = require("express");
const RolesRouter = express.Router();
const RoleController = require("./roles.controller");
const { controllerWrapper } = require("../helpers");
const validateBody = require("../middlewares/validateBody");
const RoleDto = require("./role.dto");
const middlewares = require("../middlewares");

RolesRouter.get(
  "/getAll",
  middlewares.UserCheck(),
  controllerWrapper(RoleController.getAllRoles)
);

RolesRouter.post(
  "/create",
  validateBody(RoleDto.createRoleDto),
  controllerWrapper(RoleController.createRole)
);

RolesRouter.delete("/:id", controllerWrapper(RoleController.deleteRoleById));

RolesRouter.patch(
  "/addActions/:id",
  validateBody(RoleDto.updateRoleDto),
  controllerWrapper(RoleController.addActionsToRoleById)
);

RolesRouter.patch(
  "/removeActions/:id",
  validateBody(RoleDto.updateRoleDto),
  controllerWrapper(RoleController.removeActionsFromRoleById)
);

RolesRouter.get(
  "/getAllActions",
  controllerWrapper(RoleController.getAllActions)
);

module.exports = RolesRouter;
