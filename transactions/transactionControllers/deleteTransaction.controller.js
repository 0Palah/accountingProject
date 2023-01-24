const TransactionService = require("../transactions.service");
const { CreateError } = require("../../helpers");

async function deleteTransaction(req, res) {
  const { id } = req.params;

  const result = await TransactionService.deleteTransactionById(id);

  if (!result) {
    throw CreateError({ status: 404, message: "Not found" });
  }

  res.status(200).json({ message: "transaction deleted", data: result });
}

module.exports = deleteTransaction;
