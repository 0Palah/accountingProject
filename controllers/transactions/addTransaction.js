const Transactions = require("../../models/transactions/index");

async function addTransaction(req, res) {
  const {
    athor,
    creator,
    auditor,
    transactionDate,
    type,
    countId,
    subCountId,
    transferCountId,
    transferSubCountIdTo,
    categoryId,
    subCategoryId,
    document,
    project,
    customer,
    amount,
    status,
    mark,
    tags,
    comment,
  } = req.body;

  console.log(req.body);
  const { _id } = req.user;

  console.log(_id);

  const result = await Transactions.create({
    athor,
    creator,
    auditor,
    transactionDate,
    type,
    countId,
    subCountId,
    transferCountId,
    transferSubCountIdTo,
    categoryId,
    subCategoryId,
    document,
    project,
    customer,
    amount,
    status,
    mark,
    tags,
    comment,
  });

  res.status(201).send(result);
}

module.exports = addTransaction;
