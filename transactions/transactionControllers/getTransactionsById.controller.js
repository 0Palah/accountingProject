const Contact = require("../../models/transactions/index");

const { createError } = require("../../helpers/createError");

async function getById(req, res) {
  const { transactionId } = req.params;
  // const { _id } = req.user;

  const result = await Contact.find({ _id: transactionId });

  if (!result) {
    throw createError({ status: 404, message: "Not found" });
  }

  res.json(result);
}

module.exports = getById;
