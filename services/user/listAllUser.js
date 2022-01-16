const { User } = require('../../models');

module.exports = async () => {
  const userList = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return userList;
};
