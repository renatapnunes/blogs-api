const { StatusCodes } = require('http-status-codes');

const existingEmail = {
  status: StatusCodes.CONFLICT,
  message: 'User already registered',
};

const unregisteredUser = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid fields',
};

const invalidPassword = {
  status: StatusCodes.FORBIDDEN,
  message: 'Invalid password',
};

const unauthorized = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'Token not found',
};

const invalidToken = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'Expired or invalid token',
};

const userNotFound = {
  status: StatusCodes.NOT_FOUND,
  message: 'User does not exist',
};

const unregisteredCategory = {
  status: StatusCodes.BAD_REQUEST,
  message: '"categoryIds" not found',
};

module.exports = {
  existingEmail,
  unregisteredUser,
  invalidPassword,
  unauthorized,
  invalidToken,
  userNotFound,
  unregisteredCategory,
};
