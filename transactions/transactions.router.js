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
  // middlewares.authenticate,
  controllerWrapper(TransactionControllers.getAll)
);

TransactionsRouter.get(
  "/:id",
  // middlewares.authenticate,
  controllerWrapper(TransactionControllers.getById)
);

TransactionsRouter.post(
  "/create",
  // middlewares.authenticate,
  middlewares.validateBody(TransactionDto.addTransactionDto),
  controllerWrapper(TransactionControllers.createTransaction)
);

TransactionsRouter.post(
  "/createMany",
  // middlewares.authenticate,
  middlewares.validateBody(TransactionDto.addManyTransactionsDto),
  controllerWrapper(TransactionControllers.createManyTransactions)
);

TransactionsRouter.delete(
  "/delete/:id",
  // middlewares.authenticate,
  controllerWrapper(TransactionControllers.deleteTransactionById)
);
TransactionsRouter.delete(
  "/deleteManyById",
  // middlewares.authenticate,
  middlewares.validateBody(TransactionDto.deleteManyTrsDto),
  controllerWrapper(TransactionControllers.deleteManyTrById)
);

TransactionsRouter.patch(
  "/:id",
  middlewares.authenticate,
  middlewares.validateBody(TransactionDto.updateTransactionDto),
  controllerWrapper(TransactionControllers.updateTransaction)
);

module.exports = TransactionsRouter;
