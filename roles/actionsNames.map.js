const { transactionsActionsMap } = require("../transactions");
const { categoriesActionsMap } = require("../directories/categories");

const apiActions = [...transactionsActionsMap, ...categoriesActionsMap];

function getArrayOfApiActions() {
  console.log("apiActions", apiActions);

  return apiActions;
}

module.exports = { apiActions, getArrayOfApiActions };
