const loginSchema = require('../../schemas/login');
const { User } = require('../../models');
const { unregisteredUser, invalidPassword } = require('../../utils/errors');
const tokenGenerator = require('../../utils/tokenGenerator');

module.exports = async (userData) => {
  const { error } = loginSchema.validate(userData);
  if (error) {
    error.status = 'BAD_REQUEST';
    return { error };
  }

  const { email, password } = userData;
  
  const user = await User.findOne({ where: { email } });
  if (!user) return { error: unregisteredUser };
  if (user.password !== password) return { error: invalidPassword };

  delete user.password;

  const token = tokenGenerator(user);

  return { token };
};
