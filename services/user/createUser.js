const userSchema = require('../../schemas/user');
const { User } = require('../../models');
const { existingEmail } = require('../../utils/errors');
const tokenGenerator = require('../../utils/tokenGenerator');

module.exports = async (userData) => {
  const { error } = userSchema.validate(userData);
  if (error) {
    error.status = 'BAD_REQUEST';
    return { error };
  }

  const { displayName, email, password, image } = userData;
  
  const user = await User.findOne({ where: { email } });
  if (user) return { error: existingEmail };

  const newUser = await User.create({ displayName, email, password, image });

  delete newUser.password;

  const token = tokenGenerator(newUser);

  return { token };
};
