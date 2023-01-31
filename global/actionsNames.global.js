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

function getArrayOfApiActions() {
  const keys = Object.keys(apiActions);

  const actionsArr = [];

  for (const key of keys) {
    actionsArr.push(apiActions[key]);
  }

  return actionsArr;
}

module.exports = { apiActions, getArrayOfApiActions };
