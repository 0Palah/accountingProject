const Joi = require("joi");
// const phoneRegexp = require("../helpers/validatePhone");

const addTransactionDto = Joi.object({
  athor: Joi.string(),
  editor: Joi.string(),
  auditor: Joi.string(),
  transactionDate: Joi.string().required(),
  type: Joi.string().valid("INCOME", "EXPENSE", "TRANSFER"),
  countIdIn: Joi.string(),
  subCountIdIn: Joi.string(),
  countIdOut: Joi.string(),
  subCountIdOut: Joi.string(),
  categoryId: Joi.string(),
  subCategoryId: Joi.string(),
  document: Joi.string(),
  innerDocument: Joi.string(),
  project: Joi.string(),
  customer: Joi.string(),
  amount: Joi.number(),
  status: Joi.string(),
  mark: Joi.string(),
  tags: Joi.array().min(1),
  comment: Joi.string(),
});

const updateTransactionDto = Joi.object({
  athor: Joi.string(),
  editor: Joi.string(),
  auditor: Joi.string(),
  transactionDate: Joi.string().required(),
  type: Joi.string().valid("INCOME", "EXPENSE", "TRANSFER"),
  countIdIn: Joi.string(),
  subCountIdIn: Joi.string(),
  countIdOut: Joi.string(),
  subCountIdOut: Joi.string(),
  categoryId: Joi.string(),
  subCategoryId: Joi.string(),
  document: Joi.string(),
  innerDocument: Joi.string(),
  project: Joi.string(),
  customer: Joi.string(),
  amount: Joi.number(),
  status: Joi.string(),
  mark: Joi.string(),
  tags: Joi.array().min(1),
  comment: Joi.string(),
});

module.exports = { addTransactionDto, updateTransactionDto };
