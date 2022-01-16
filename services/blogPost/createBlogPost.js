const blogPostSchema = require('../../schemas/blogPost');
const { BlogPost, Category } = require('../../models');
const { unregisteredCategory } = require('../../utils/errors');

const checkCategories = async ({ categoryIds }) => {
  const categoriesChecked = await Promise.all(categoryIds.map(async (id) => {
    const idChecked = await Category.findByPk(id);
    if (!idChecked) return { error: unregisteredCategory };

    return idChecked;
  }));

  return categoriesChecked;
};

module.exports = async (blogPostData, userId) => {
  const { error } = blogPostSchema.validate(blogPostData);
  if (error) {
    error.status = 'BAD_REQUEST';
    return { error };
  }

  const categoriesChecked = await checkCategories(blogPostData);

  if (categoriesChecked.some((category) => ('error' in category))) {
    return { error: unregisteredCategory };
  }

  const newPostBlog = await BlogPost.create({ ...blogPostData, userId });

  return newPostBlog;
};
