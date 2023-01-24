const TransactionService = require("../transactionServices");
const TransactionMessages = require("../transactions.messages");

async function addTransaction(req, res) {
  console.log(req.body);

  const { _id } = req.user;

  console.log(_id);

  const newData = {
    author: _id,
    ...req.body,
  };

  const newTransaction = await TransactionService.addTransaction(newData);

  if (!newTransaction) {
    throw new Error();
  }

  res.status(201).send({
    message: TransactionMessages.CREATING_SUCCESS,
    data: newTransaction,
  });
}

module.exports = addTransaction;
