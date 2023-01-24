const addTransaction = require("./addTransaction.controller");
const getAll = require("./getAllTransactions.controller");
const getById = require("./getTransactionsById.controller");
const deleteTransactionById = require("./deleteTransaction.controller");
const updateTransaction = require("./updateTransaction.controller");

module.exports = {
  getAll,
  getById,
  addTransaction,
  deleteTransactionById,
  updateTransaction,
};
