const { StatusCodes } = require('http-status-codes');
const createBlogPost = require('../../services/blogPost/createBlogPost');

module.exports = async (req, res, next) => {
  try {
    const blogPost = req.body;
    const { id } = req.user;

    const newBlogPost = await createBlogPost(blogPost, id);
    if ('error' in newBlogPost) return next(newBlogPost.error);
  
    return res.status(StatusCodes.CREATED).send(newBlogPost);
  } catch (err) {
    next(err);
  }
};
