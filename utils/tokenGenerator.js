const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const JWT_CONFIG = {
  expiresIn: '30m', // token expira após 30min
  algorithm: 'HS256', //  criptografia: HMAC com SHA256 (chaves privadas)
};

module.exports = (data) => jwt.sign({ data }, JWT_SECRET, JWT_CONFIG);
