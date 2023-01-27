const TransactionService = require("../transactions.service");
const TransactionMessages = require("../transactions.messages");

async function addTransaction(req, res) {
  // const { id = "0000000" } = req?.user;

  const newTransactionData = {
    author: req?.user?.id || "0000000",
    ...req.body,
  };

  console.log("newTransaction", newTransactionData);

  const newTransaction = await TransactionService.addTransaction(
    newTransactionData
  );

  if (!newTransaction) {
    throw new Error();
  }

  res.status(201).send({
    message: TransactionMessages.CREATING_SUCCESS,
    data: newTransaction,
  });
}

module.exports = addTransaction;
