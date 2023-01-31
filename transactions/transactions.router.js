const express = require("express");
const TransactionsRouter = express.Router();

const TransactionControllers = require("./transactionControllers");
const TransactionDto = require("./transaction.dto");
const validateBody = require("../middlewares/validateBody");
const { controllerWrapper } = require("../helpers");
// const { UserCheck } = require("../middlewares");

TransactionsRouter.get(
  "/getAll",
  // UserCheck({ actionName: TransactionControllers.getAll.name }),
  controllerWrapper(TransactionControllers.getAll)
);
TransactionsRouter.get(
  "/getAll/byCountIds",
  validateBody(TransactionDto.deleteManyTrsDto),
  controllerWrapper(TransactionControllers.getAllTrsByCountIds)
);
TransactionsRouter.get(
  "/getAll/bySubCountIds",
  validateBody(TransactionDto.deleteManyTrsDto),
  controllerWrapper(TransactionControllers.getAllTrsBySubCountIds)
);

TransactionsRouter.get(
  "/:id",
  controllerWrapper(TransactionControllers.getById)
);

TransactionsRouter.post(
  "/create",
  validateBody(TransactionDto.addTransactionDto),
  controllerWrapper(TransactionControllers.createTransaction)
);

TransactionsRouter.post(
  "/createMany",
  validateBody(TransactionDto.addManyTransactionsDto),
  controllerWrapper(TransactionControllers.createManyTransactions)
);

TransactionsRouter.delete(
  "/delete/:id",
  controllerWrapper(TransactionControllers.deleteTransactionById)
);
TransactionsRouter.delete(
  "/deleteManyById",
  validateBody(TransactionDto.deleteManyTrsDto),
  controllerWrapper(TransactionControllers.deleteManyTrById)
);

TransactionsRouter.patch(
  "/:id",
  validateBody(TransactionDto.updateTransactionDto),
  controllerWrapper(TransactionControllers.updateTransaction)
);

module.exports = TransactionsRouter;
