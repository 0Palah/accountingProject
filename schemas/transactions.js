const Joi = require("joi");
const phoneRegexp = require("../helpers/validatePhone");

const addTransactionsSchema = Joi.object({
  athor: Joi.string(),
  creator: Joi.string(),
  auditor: Joi.string(),
  transactionDate: Joi.string(),
  type: Joi.string().valid("income", "expense", "transfer"),
  countId: Joi.string(),
  subCountId: Joi.string(),
  transferCountId: Joi.string(),
  transferSubCountIdTo: Joi.string(),
  categoryId: Joi.string(),
  subCategoryId: Joi.string(),
  document: Joi.string(),
  project: Joi.string(),
  customer: Joi.string(),
  amount: Joi.number(),
  status: Joi.string(),
  mark: Joi.string(),
  tags: Joi.string(),
  comment: Joi.string(),
});

const updateFavoriteByIdSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { addTransactionsSchema, updateFavoriteByIdSchema };
