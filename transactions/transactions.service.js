const TransactionModel = require("./transaction.model");
// db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )

async function getAllTransactions() {
  return TransactionModel.find().exec();
}
async function getAllTrsByCountIds(idsArrData) {
  console.log("service", idsArrData);
  return TransactionModel.find({
    $or: [
      { countIdIn: { $in: idsArrData } },
      { countIdOut: { $in: idsArrData } },
    ],
  }).exec();
}
async function getAllTrsBySubCountIds(idsArrData) {
  return TransactionModel.find(
    {
      $or: [
        { subCountIdIn: { $in: idsArrData } },
        { subCountIdOut: { $in: idsArrData } },
      ],
    },
    "_id subCountIdIn subCountIdOut"
  )
    .sort({ _id: -1 })
    .exec();
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
  getAllTrsByCountIds,
  getAllTrsBySubCountIds,
  createTransaction,
  findTransactionById,
  updateTransactionById,
  deleteTransactionById,
  createManyTrs,
  deleteManyTrById,
};
