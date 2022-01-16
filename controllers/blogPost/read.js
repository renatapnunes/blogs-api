const { StatusCodes } = require('http-status-codes');
const listAllBlogPost = require('../../services/blogPost/listAllBlogPost');

module.exports = async (req, res, next) => {
  try {
    const blogPostList = await listAllBlogPost();

    return res.status(StatusCodes.OK).send(blogPostList);
  } catch (err) {
    next(err);
  }
};
