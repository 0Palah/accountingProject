const transactionsActionsMap = require("../transactions/transactions.map");
const categoriesActionsMap = require("../directories/categories/categories.map");
const countsActionsMap = require("../directories/counts/counts.map");

const apiActions = [
  ...transactionsActionsMap,
  ...categoriesActionsMap,
  ...countsActionsMap,
];
// // async function getArrayOfApiActions(log) {
// //   // apiActions.map((act) => console.log(act.name));

// //   log && console.log(apiActions.map((el) => el.name));

// //   return apiActions;
// // }
// // module.exports = { apiActions, getArrayOfApiActions };
module.exports = apiActions;
