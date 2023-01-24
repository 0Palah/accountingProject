const TransactionModel = require("../transaction.model");

const getAllTransactions = () => {
  return TransactionModel.find().exec();
};

const addTransaction = (dto) => {
  return TransactionModel.create(dto);
};

module.exports = {
  getAllTransactions,
  addTransaction,
};
