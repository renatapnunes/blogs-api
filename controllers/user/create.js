const { StatusCodes } = require('http-status-codes');
const createUser = require('../../services/user/createUser');

module.exports = async (req, res, next) => {
  try {
    const userData = req.body;

    const token = await createUser(userData);
    if ('error' in token) return next(token.error);
  
    return res.status(StatusCodes.CREATED).send(token);
  } catch (err) {
    next(err);
  }
};
