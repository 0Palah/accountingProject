const ActionsService = require("./actions.service");

async function getAllActions(req, res, next) {
  // const actions = await ActionsService.getArrayOfApiActions();

  res.status(200).json({
    message: "All actions",
    data: await ActionsService.getArrayOfApiActions(),
  });
}

module.exports = {
  getAllActions,
};
