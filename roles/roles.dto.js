const Joi = require("Joi");

const createRoleDto = Joi.object({
  name: Joi.string().required(),
  routes: Joi.array().items(Joi.string()).required(),
  description: Joi.string(),
});

const updateRoleDto = Joi.object({
  name: Joi.string(),
  routes: Joi.array().items(Joi.string()),
  description: Joi.string(),
});

module.exports = {
  createRoleDto,
  updateRoleDto,
};
