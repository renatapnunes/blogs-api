const existingEmail = {
  status: 'CONFLICT',
  message: 'User already registered',
};

const unregisteredUser = {
  status: 'BAD_REQUEST',
  message: 'Invalid fields',
};

const invalidPassword = {
  status: 'FORBIDDEN',
  message: 'Invalid password',
};

module.exports = {
  existingEmail,
  unregisteredUser,
  invalidPassword,
};
