const Joi = require("Joi");

const createCouuntDto = Joi.object({
  name: Joi.string().required(),
  owner: Joi.string(),
  code: Joi.string(),
  type: Joi.string(),
  descr: Joi.string(),
});

const updateCountDto = Joi.object({
  name: Joi.string(),
  owner: Joi.string(),
  code: Joi.string(),
  type: Joi.string(),
  descr: Joi.string(),
});

module.exports = {
  createCouuntDto,
  updateCountDto,
};
