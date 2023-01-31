const apiActions = {
  getAllCategories: {
    name: "getAllCategories",
    path: "",
  },
  getAllCategoriesByOwnerId: {
    name: "getAllCategoriesByOwnerId",
    path: "",
  },
  getAllTransactions: {
    name: "getAllTransactions",
    path: "",
  },
  createTransaction: {
    name: "createTransaction",
    path: "",
  },
  deleteTransaction: {
    name: "deleteTransaction",
    path: "",
  },
  updateTransaction: {
    name: "updateTransaction",
    path: "",
  },
};
// const apiActionsArr = [apiActions.createTransaction];

function getArrayOfApiActions() {
  const keys = Object.keys(apiActions);
  console.log(keys);
}

module.exports = { apiActions, getArrayOfApiActions };
