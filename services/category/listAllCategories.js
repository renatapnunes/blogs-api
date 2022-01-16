const { Category } = require('../../models');

module.exports = async () => {
  const categoryList = await Category.findAll();

  return categoryList;
};
