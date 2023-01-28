const TransactionModel = require("./transaction.model");

async function getAllTransactions() {
  return TransactionModel.find().exec();
}

async function createTransaction(dto) {
  return TransactionModel.create(dto);
}
async function createManyTrs(trsArrData) {
  return TransactionModel.insertMany(trsArrData);
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
async function deleteManyTrById(idsArrData) {
  return TransactionModel.deleteMany({ _id: { $in: idsArrData } });
}

module.exports = {
  getAllTransactions,
  createTransaction,
  findTransactionById,
  updateTransactionById,
  deleteTransactionById,
  createManyTrs,
  deleteManyTrById,
};
