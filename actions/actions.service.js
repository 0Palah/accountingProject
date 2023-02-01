const apiActions = require("./actions.map");

async function getArrayOfApiActions(log) {
  // apiActions.map((act) => console.log(act.name));

  log && console.log(apiActions.map((el) => el.name));

  return apiActions;
}

module.exports = { getArrayOfApiActions };
