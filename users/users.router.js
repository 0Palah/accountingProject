const express = require("express");

const UsersRouter = express.Router();

const controllers = require("./usersControllers");
const middlewares = require("../middlewares");
const UserDto = require("./user.dto");
const controllerWrapper = require("../helpers/controllerWrapper");

UsersRouter.post(
  "/register",
  middlewares.validateBody(UserDto.registerUserSchema),
  controllerWrapper(controllers.registerUser)
);

UsersRouter.get(
  "/login",
  middlewares.validateBody(UserDto.loginUserSchema),
  controllerWrapper(controllers.loginUser)
);

UsersRouter.get(
  "/current",
  middlewares.authenticate,
  controllerWrapper(controllers.getCurrentUser)
);

UsersRouter.post(
  "/logout",
  middlewares.authenticate,
  controllerWrapper(controllers.logoutUser)
);

UsersRouter.post(
  "/verify",
  middlewares.validateBody(UserDto.resendVerificationEmail),
  controllerWrapper(controllers.resendVerificationEmail)
);

UsersRouter.get(
  "/refreshToken",
  middlewares.authenticateRefreshToken,
  controllerWrapper(controllers.refreshToken)
);

UsersRouter.get(
  "/verify/:verificationToken",
  controllerWrapper(controllers.verify)
);

module.exports = UsersRouter;
