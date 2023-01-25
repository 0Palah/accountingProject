const express = require("express");

const TransactionsRouter = express.Router();
const middlewares = require("../middlewares");

const { ControllerWrapper } = require("../helpers");
const TransactionDto = require("./transaction.dto");
const TransactionControllers = require("./transactionControllers");

// console.log(TransactionDto);
// console.log(TransactionControllers);

TransactionsRouter.get(
  "/",
  middlewares.authenticate,
  ControllerWrapper(TransactionControllers.getAll)
);

TransactionsRouter.get(
  "/:id",
  middlewares.authenticate,
  ControllerWrapper(TransactionControllers.getById)
);

TransactionsRouter.post(
  "/",
  middlewares.authenticate,
  middlewares.validateBody(TransactionDto.addTransactionDto),
  ControllerWrapper(TransactionControllers.addTransaction)
);

TransactionsRouter.delete(
  "/:id",
  middlewares.authenticate,
  ControllerWrapper(TransactionControllers.removeTransaction)
);

TransactionsRouter.patch(
  "/:id",
  middlewares.authenticate,
  middlewares.validateBody(TransactionDto.updateTransactionDto),
  ControllerWrapper(TransactionControllers.updateTransaction)
);

// TransactionsRouter.patch(
//   "/:contactId/favorite",
//   middlewares.authenticate,
//   middlewares.validateBody(schemas.transactions.updateFavoriteByIdSchema),
//   controllerWrapper(TransactionControllers.updateFavoriteById)
// );

module.exports = TransactionsRouter;
