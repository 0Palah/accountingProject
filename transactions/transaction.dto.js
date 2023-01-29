const Joi = require("joi");
// const phoneRegexp = require("../helpers/validatePhone");

const TransactionsConstants = require("./transactions.constants");

const createTrDtoSet = {
  athor: Joi.string(),
  editor: Joi.string(),
  auditor: Joi.string(),
  transactionDate: Joi.string().required(),
  type: Joi.string().valid(...TransactionsConstants.TransactionsTypeEnum),
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
};

const addTransactionDto = Joi.object(createTrDtoSet);

const addManyTransactionsDto = Joi.array()
  .items(Joi.object(createTrDtoSet))
  .min(1)
  .max(10);

const updateTransactionDto = Joi.object({
  athor: Joi.string(),
  editor: Joi.string(),
  auditor: Joi.string(),
  transactionDate: Joi.string().required(),
  type: Joi.string().valid(...TransactionsConstants.TransactionsTypeEnum),
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

const deleteManyTrsDto = Joi.array().items(Joi.string()).min(1);

module.exports = {
  addTransactionDto,
  updateTransactionDto,
  addManyTransactionsDto,
  deleteManyTrsDto,
};
