// const Transaction = require("../../models/transactions/index");

// async function getAllTransaction(req, res) {
//   const { _id } = req.user;

//   // const { page = 1, limit = 20, favorite } = req.query;

//   // const skip = (page - 1) * limit;

//   // const searchParams = {
//   //   owner: _id,
//   // };

//   // if (favorite === "true") {
//   //   searchParams.favorite = favorite;
//   // }

//   // if (favorite === "false") {
//   //   searchParams.favorite = favorite;
//   // }

//   // const result = await Transaction.find({}, "-createdAt -updatedAt");
//   const result = await Transaction.find({});

//   res.json(result);
// }

// module.exports = getAllTransaction;
