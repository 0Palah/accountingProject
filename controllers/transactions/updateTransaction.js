// const Transaction = require("../../models/transactions/index");

// const { createError } = require("../../helpers/createError");

// async function updateTransaction(req, res) {
//   const { transactionId } = req.params;

//   const result = await Transaction.findOneAndUpdate(
//     { _id: transactionId },
//     req.body,
//     {
//       new: true,
//     }
//   );

//   if (!result) {
//     throw createError({ status: 404, message: "Not found" });
//   }

//   res.status(200).send(result);
// }

// module.exports = updateTransaction;
