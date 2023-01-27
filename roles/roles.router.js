const express = require("express");

const RolesRouter = express.Router();
const middlewares = require("../middlewares");

const { controllerWrapper } = require("../helpers");
const RoleDto = require("./roles.dto");
const RoleControllers = require("./roles.controller");

RolesRouter.get(
  "/getAll",
  // middlewares.authenticate,
  controllerWrapper(RoleControllers.getAllRoles)
);

// RolesRouter.get(
//   "/:id",
//   // middlewares.authenticate,
//   controllerWrapper(RoleControllers.createRole)
// );

RolesRouter.post(
  "/create",
  // middlewares.authenticate,
  middlewares.validateBody(RoleDto.createRoleDto),
  controllerWrapper(RoleControllers.createRole)
);

RolesRouter.delete(
  "/:id",
  // middlewares.authenticate,
  controllerWrapper(RoleControllers.deleteRoleById)
);

RolesRouter.patch(
  "/addActions/:id",
  // middlewares.authenticate,
  middlewares.validateBody(RoleDto.updateRoleDto),
  controllerWrapper(RoleControllers.addActionsToRoleById)
);
RolesRouter.patch(
  "/removeActions/:id",
  // middlewares.authenticate,
  middlewares.validateBody(RoleDto.updateRoleDto),
  controllerWrapper(RoleControllers.removeActionsFromRoleById)
);

module.exports = RolesRouter;
