const categorySchema = require('../../schemas/category');
const { Category } = require('../../models');

module.exports = async (nameCategory) => {
  const { error } = categorySchema.validate(nameCategory);
  if (error) {
    error.status = 'BAD_REQUEST';
    return { error };
  }

  const { name } = nameCategory;
  const newCategory = await Category.create({ name });

  return newCategory;
};
