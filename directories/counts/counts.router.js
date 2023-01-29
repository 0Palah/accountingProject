const express = require("express");
const { controllerWrapper } = require("../../helpers");
const middlewares = require("../../middlewares");
const CountDto = require("./count.dto");
const CountController = require("./counts.controller");

const countsRouter = express.Router();

countsRouter.get(
  "/getAll",
  // middlewares.authenticate,
  controllerWrapper(CountController.getAllCounts)
);

countsRouter.post(
  "/create",
  // middlewares.authenticate,
  middlewares.validateBody(CountDto.createCouuntDto),
  controllerWrapper(CountController.createCount)
);

countsRouter.delete(
  "/delete/:id",
  // middlewares.authenticate,
  controllerWrapper(CountController.deleteCountById)
);

countsRouter.patch(
  "/update/:id",
  // middlewares.authenticate,
  middlewares.validateBody(CountDto.updateCountDto),
  controllerWrapper(CountController)
);

module.exports = countsRouter;
