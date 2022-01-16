const jwt = require('jsonwebtoken');
const { invalidToken, unauthorized } = require('../utils/errors');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return next(unauthorized);

    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) return next(invalidToken);

    const user = decoded.data;
    req.user = user;

    next();
  } catch (err) {
    next(invalidToken);
  }
};
