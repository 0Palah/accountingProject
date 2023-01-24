const TransactionService = require("../transactions.service");

async function getAllTransaction(req, res) {
  const { _id } = req.user;

  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const paginationSettings = {
    limit,
    skip,
  };
  const searchParams = {
    owner: _id,
  };

  const allTransactions = await TransactionService.getAllTransactions(
    searchParams,
    paginationSettings
  );

  res.json({
    message: "All transactions",
    data: allTransactions,
  });
}

module.exports = getAllTransaction;
