const TransactionMessages = require("../transactions.messages");
const TransactionService = require("../transactions.service");

async function getAllTrsByCountIds(req, res) {
  const { page = 1, limit = 20 } = req.query;

  const skip = (page - 1) * limit;
  const paginationSettings = {
    limit,
    skip,
  };

  const allTransactions = await TransactionService.getAllTrsByCountIds(
    req.body,
    paginationSettings
  );

  res.json({
    message: TransactionMessages?.FOUND_TRANSACTIONS(allTransactions.length),
    data: allTransactions,
  });
}

module.exports = getAllTrsByCountIds;
