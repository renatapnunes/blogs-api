const Joi = require('@hapi/joi');

module.exports = Joi.object({
  name: Joi
    .string()
    .required(),
}).messages({
  'string.required': '"name" is required',
});
