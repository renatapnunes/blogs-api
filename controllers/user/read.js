const { StatusCodes } = require('http-status-codes');
const listAllUser = require('../../services/user/listAllUser');

module.exports = async (req, res, next) => {
  try {
    const userList = await listAllUser();
  
    return res.status(StatusCodes.OK).send(userList);
  } catch (err) {
    next(err);
  }
};
