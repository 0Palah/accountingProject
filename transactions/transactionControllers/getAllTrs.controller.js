const TransactionMessages = require("../transactions.messages");
const TransactionService = require("../transactions.service");

async function getAllTransactions(req, res) {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const paginationSettings = {
    limit,
    skip,
  };
  const searchParams = {};

  const allTransactions = await TransactionService.getAllTransactions(
    searchParams,
    paginationSettings
  );

  res.json({
    message: TransactionMessages?.FOUND_TRANSACTIONS(allTransactions.length),
    data: allTransactions,
  });
}

module.exports = getAllTransactions;
