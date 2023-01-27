const TransactionModel = require("./transaction.model");

async function getAllTransactions() {
  return TransactionModel.find().exec();
}

async function addTransaction(dto) {
  return TransactionModel.create(dto);
}

async function updateTransactionById(id, updateData) {
  return TransactionModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
}

async function findTransactionById(id) {
  const result = await TransactionModel.findById(id);

  if (!result) {
    throw new Error();
  }

  return result;
}

async function deleteTransactionById(id) {
  return TransactionModel.findByIdAndRemove(id);
}

module.exports = {
  getAllTransactions,
  addTransaction,
  findTransactionById,
  updateTransactionById,
  deleteTransactionById,
};
