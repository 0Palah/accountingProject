const TransactionModel = require("../transaction.model");

const getAllTransactions = async () => {
  return TransactionModel.find().exec();
};

const addTransaction = async (dto) => {
  return TransactionModel.create(dto);
};

const findTransactionById = async (id) => {
  const result = await TransactionModel.findById(id);

  if (!result) {
    throw new Error();
  }

  return result;
};

module.exports = {
  getAllTransactions,
  addTransaction,
  findTransactionById,
};
