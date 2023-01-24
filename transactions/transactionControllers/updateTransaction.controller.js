const TransactionService = require("../transactions.service");

const { CreateError } = require("../../helpers");

async function updateTransaction(req, res) {
  const { id } = req.params;
  const updateData = {
    updator: req?.user?._id,
    ...req.body,
  };
  const result = await TransactionService.updateTransactionById(id, updateData);

  if (!result) {
    throw CreateError({ status: 404, message: "Not found" });
  }

  res.status(200).send({
    message: `Updated`,
    data: result,
  });
}

module.exports = updateTransaction;
