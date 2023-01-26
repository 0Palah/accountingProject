const express = require("express");

const TransactionsRouter = express.Router();
const middlewares = require("../middlewares");

const { controllerWrapper } = require("../helpers");
const TransactionDto = require("./transaction.dto");
const TransactionControllers = require("./transactionControllers");

// console.log(TransactionDto);
// console.log(TransactionControllers);

TransactionsRouter.get(
  "/getAll",
  middlewares.authenticate,
  controllerWrapper(TransactionControllers.getAll)
);

TransactionsRouter.get(
  "/:id",
  middlewares.authenticate,
  controllerWrapper(TransactionControllers.getById)
);

TransactionsRouter.post(
  "/create",
  middlewares.authenticate,
  middlewares.validateBody(TransactionDto.addTransactionDto),
  controllerWrapper(TransactionControllers.addTransaction)
);

TransactionsRouter.delete(
  "/:id",
  middlewares.authenticate,
  controllerWrapper(TransactionControllers.removeTransaction)
);

TransactionsRouter.patch(
  "/:id",
  middlewares.authenticate,
  middlewares.validateBody(TransactionDto.updateTransactionDto),
  controllerWrapper(TransactionControllers.updateTransaction)
);

// TransactionsRouter.patch(
//   "/:contactId/favorite",
//   middlewares.authenticate,
//   middlewares.validateBody(schemas.transactions.updateFavoriteByIdSchema),
//   controllerWrapper(TransactionControllers.updateFavoriteById)
// );

module.exports = TransactionsRouter;
