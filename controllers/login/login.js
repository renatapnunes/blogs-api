const { StatusCodes } = require('http-status-codes');
const login = require('../../services/login/login');

module.exports = async (req, res, next) => {
  try {
    const userData = req.body;

    const token = await login(userData);
    if ('error' in token) return next(token.error);
  
    return res.status(StatusCodes.OK).send(token);
  } catch (err) {
    next(err);
  }
};
