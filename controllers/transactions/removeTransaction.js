// const Transaction = require("../../models/transactions/index");
// const { createError } = require("../../helpers/createError");

// async function removeTransaction(req, res) {
//   const { transactionId } = req.params;

//   const result = await Transaction.findOneAndDelete({ _id: transactionId });

//   if (!result) {
//     throw createError({ status: 404, message: "Not found" });
//   }

//   res.status(200).json({ message: "transaction deleted" });
// }

// module.exports = removeTransaction;
