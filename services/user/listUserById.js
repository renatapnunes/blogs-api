const { User } = require('../../models');
const { userNotFound } = require('../../utils/errors');

module.exports = async (id) => {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  });

  if (!user) return { error: userNotFound };

  return user;
};
