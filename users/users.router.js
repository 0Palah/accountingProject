const express = require("express");

const UsersRouter = express.Router();

const UsersControllers = require("./usersControllers");
const middlewares = require("../middlewares");
const UserDto = require("./user.dto");
const controllerWrapper = require("../helpers/controllerWrapper");

UsersRouter.post(
  "/register",
  middlewares.validateBody(UserDto.registerUserSchema),
  controllerWrapper(UsersControllers.registerUser)
);

UsersRouter.get(
  "/login",
  middlewares.validateBody(UserDto.loginUserSchema),
  controllerWrapper(UsersControllers.loginUser)
);

UsersRouter.get(
  "/current",
  middlewares.authenticate,
  controllerWrapper(UsersControllers.getCurrentUser)
);

UsersRouter.post(
  "/logout",
  middlewares.authenticate,
  controllerWrapper(UsersControllers.logoutUser)
);

UsersRouter.post(
  "/verify",
  middlewares.validateBody(UserDto.resendVerificationEmail),
  controllerWrapper(UsersControllers.resendVerificationEmail)
);

UsersRouter.get(
  "/refreshToken",
  middlewares.authenticateRefreshToken,
  controllerWrapper(UsersControllers.refreshToken)
);

UsersRouter.get(
  "/verify/:verificationToken",
  controllerWrapper(UsersControllers.verify)
);

module.exports = UsersRouter;
