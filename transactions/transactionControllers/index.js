const addTransaction = require("./addTransaction.controller");
const getAll = require("./getAllTransactions.controller");
const getById = require("./getTransactionsById.controller");
const removeTransaction = require("./removeTransaction.controller");
const updateTransaction = require("./updateTransaction.controller");

module.exports = {
  addTransaction,
  getAll,
  getById,
  removeTransaction,
  updateTransaction,
};
