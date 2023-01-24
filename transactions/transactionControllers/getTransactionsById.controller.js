const TransactionService = require("../transactions.service");
const TransactionMessages = require("../transactions.messages");
const { CreateError } = require("../../helpers");

async function getById(req, res) {
  const { id } = req.params;

  const result = await TransactionService.getById(id);

  if (!result) {
    throw CreateError({ status: 404, message: "Not found" });
  }

  res.json({
    message: TransactionMessages.NOT_FOUND_TRANSACTION_BY_ID(id),
    data: result,
  });
}

module.exports = getById;
