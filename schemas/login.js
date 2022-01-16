const Joi = require('@hapi/joi');

module.exports = Joi.object({
  email: Joi
    .string()
    .email()
    .required(),
  password: Joi
    .string()
    .min(6)
    .message('"password" length must be 6 characters long')
    .required(),
}).messages({
  'any.required': '{#label} is required',
  'any.email': '{#label} must be a valid email',
  'any.empty': '{#label} is not allowed to be empty',
});
