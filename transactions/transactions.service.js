const TransactionModel = require("./transaction.model");

const getAllTransactions = async () => {
  return TransactionModel.find().exec();
};

const addTransaction = async (dto) => {
  return TransactionModel.create(dto);
};

const updateTransactionById = async (id, updateData) => {
  return TransactionModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const findTransactionById = async (id) => {
  const result = await TransactionModel.findById(id);

  if (!result) {
    throw new Error();
  }

  return result;
};

const deleteTransactionById = async (id) => {
  return TransactionModel.findByIdAndRemove(id);
};

module.exports = {
  getAllTransactions,
  addTransaction,
  findTransactionById,
  updateTransactionById,
  deleteTransactionById,
};
