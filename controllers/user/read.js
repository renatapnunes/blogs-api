const { StatusCodes } = require('http-status-codes');
const listAllUser = require('../../services/user/listAllUser');
const listUserById = require('../../services/user/listUserById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    let userList = {};

    if (id) {
      userList = await listUserById(id);
    } else {
      userList = await listAllUser();
    }

    if ('error' in userList) return next(userList.error);

    return res.status(StatusCodes.OK).send(userList);
  } catch (err) {
    next(err);
  }
};
