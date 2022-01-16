// const Joi = require('joi');
const Joi = require('@hapi/joi');

module.exports = Joi.object({
  displayName: Joi
    .string()
    .min(8)
    .message('"displayName" length must be at least 8 characters long')
    .required(),
  email: Joi
    .string()
    .email()
    .required(),
  password: Joi
    .string()
    .min(6)
    .message('"password" length must be 6 characters long')
    .required(),
  image: Joi
    .string(),
}).messages({
  'any.required': '{#label} is required',
  'any.email': '{#label} must be a valid email',
});
