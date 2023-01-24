const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/transactions");
const middlewares = require("../../middlewares");
const schemas = require("../../schemas");
const controllerWrapper = require("../../helpers/controllerWrapper");

router.get(
  "/",
  middlewares.authenticate,
  controllerWrapper(controllers.getAll)
);

router.get(
  "/:contactId",
  middlewares.authenticate,
  controllerWrapper(controllers.getById)
);

router.post(
  "/",
  middlewares.authenticate,
  middlewares.validateBody(schemas.transactions.addTransactionSchema),
  controllerWrapper(controllers.addTransaction)
);

router.delete(
  "/:contactId",
  middlewares.authenticate,
  controllerWrapper(controllers.removeContact)
);

router.put(
  "/:contactId",
  middlewares.authenticate,
  middlewares.validateBody(schemas.transactions.addTransactionSchema),
  controllerWrapper(controllers.updateContact)
);

router.patch(
  "/:contactId/favorite",
  middlewares.authenticate,
  middlewares.validateBody(schemas.transactions.updateFavoriteByIdSchema),
  controllerWrapper(controllers.updateFavoriteById)
);

module.exports = router;
