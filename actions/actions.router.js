const express = require("express");
const { controllerWrapper } = require("../helpers");
const ActionsRouter = express.Router();
const ActionsController = require("./actions.controller");

ActionsRouter.get(
  "/getAll",
  controllerWrapper(ActionsController.getAllActions)
);

module.exports = ActionsRouter;
