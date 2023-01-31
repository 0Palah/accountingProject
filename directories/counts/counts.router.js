const express = require("express");
const { controllerWrapper } = require("../../helpers");
const middlewares = require("../../middlewares");
const CountDto = require("./count.dto");
const CountController = require("./counts.controller");

const CountsRouter = express.Router();

CountsRouter.get(
  "/getAll",
  // middlewares.authenticate,
  controllerWrapper(CountController.getAllCounts)
);

CountsRouter.post(
  "/create",
  // middlewares.authenticate,
  middlewares.validateBody(CountDto.createCountDto),
  controllerWrapper(CountController.createCount)
);

CountsRouter.delete(
  "/delete/:id",
  // middlewares.authenticate,
  controllerWrapper(CountController.deleteCountById)
);

CountsRouter.patch(
  "/update/:id",
  // middlewares.authenticate,
  middlewares.validateBody(CountDto.updateCountDto),
  controllerWrapper(CountController.updateCountById)
);

CountsRouter.patch(
  "/update/correctCountBalanse:id",
  // middlewares.authenticate,
  middlewares.validateBody(CountDto.correctCountBalanceDto),
  controllerWrapper(CountController.updateCountById)
);

module.exports = CountsRouter;
