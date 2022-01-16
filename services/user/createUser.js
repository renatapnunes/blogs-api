const jwt = require('jsonwebtoken');
const userSchema = require('../../schemas/user');
const { User } = require('../../models');
const { existingEmail } = require('../../utils/errors');

const { JWT_SECRET } = process.env;

const JWT_CONFIG = {
  expiresIn: '30m', // token expira após 30min
  algorithm: 'HS256', //  criptografia: HMAC com SHA256 (chaves privadas)
};

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

  const token = jwt.sign({ data: newUser }, JWT_SECRET, JWT_CONFIG);

  return { token };
};
