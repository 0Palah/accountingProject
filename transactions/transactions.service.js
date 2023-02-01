const TransactionModel = require("./transaction.model");
const { createError, HttpStatus } = require("../helpers");
const { TransactionMessages } = require("./transactions.messages");
// db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )

async function getAllTransactions() {
  return TransactionModel.find()
    .populate({ path: "countIdIn", select: "name code" })
    .populate({ path: "subCountIdIn", select: "name code" })
    .populate({ path: "countIdOut", select: "name code" })
    .populate({ path: "subCountIdOut", select: "name code" })
    .populate({ path: "categoryId", select: "name code" })
    .populate({ path: "subCategoryId", select: "name code" })
    .sort({ transactionDate: -1 });
}
async function getTransactionsByIdsArr(idsArr) {
  return TransactionModel.find({ _id: { $in: idsArr } })
    .populate({ path: "countIdIn", select: "name code" })
    .populate({ path: "subCountIdIn", select: "name code" })
    .populate({ path: "countIdOut", select: "name code" })
    .populate({ path: "subCountIdOut", select: "name code" })
    .populate({ path: "categoryId", select: "name code" })
    .populate({ path: "subCategoryId", select: "name code" })
    .sort({ transactionDate: -1 });
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
  const createdDoc = await TransactionModel.create(dto);

  return findTransactionById(createdDoc?._id);
}
async function createManyTrs(trsArrData) {
  const createdTrs = await TransactionModel.insertMany(trsArrData);

  if (!createdTrs) {
    throw createError({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: TransactionMessages.CREATING_MANY_ERROR,
    });
  }
  const idsArr = createdTrs.map((el) => el?._id);

  return getTransactionsByIdsArr(idsArr);
}

async function updateTransactionById(id, updateData) {
  return TransactionModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
}

async function findTransactionById(id) {
  return TransactionModel.findById(id)
    .populate({ path: "countIdIn", select: "name code" })
    .populate({ path: "subCountIdIn", select: "name code" })
    .populate({ path: "countIdOut", select: "name code" })
    .populate({ path: "subCountIdOut", select: "name code" })
    .populate({ path: "categoryId", select: "name code" })
    .populate({ path: "subCategoryId", select: "name code" });
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
