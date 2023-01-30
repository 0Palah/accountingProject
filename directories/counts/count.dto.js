const Joi = require("Joi");

const createCountDto = Joi.object({
  name: Joi.string().required(),
  owner: Joi.string(),
  code: Joi.string(),
  type: Joi.string().valid(),
  balance: Joi.number(),
  descr: Joi.string(),
});

const updateCountDto = Joi.object({
  name: Joi.string(),
  owner: Joi.string(),
  code: Joi.string(),
  type: Joi.string(),
  descr: Joi.string(),
});
const correctCountBalanceDto = Joi.object({
  balance: Joi.number(),
});

module.exports = {
  createCountDto,
  updateCountDto,
  correctCountBalanceDto,
};
