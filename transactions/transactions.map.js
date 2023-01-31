const TransactionControllers = require("./transactionControllers");

const transactionsActionsMap = [
  {
    name: TransactionControllers.getAll.name,
    title: "",
    descr: "Get all transactions withou filters",
  },
  {
    name: TransactionControllers.createTransaction.name,
    title: "",
    descr: "For creating transactions",
  },
  {
    name: TransactionControllers.createManyTransactions.name,
    title: "",
    descr: "For creating array of transactions",
  },
  {
    name: TransactionControllers.deleteTransactionById.name,
    title: "",
    descr: "For deleting transactions",
  },
  {
    name: TransactionControllers.deleteManyTrById.name,
    title: "",
    descr: "For deleting array of transactions",
  },
];

module.exports = transactionsActionsMap;
