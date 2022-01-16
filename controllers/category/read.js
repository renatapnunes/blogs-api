const { StatusCodes } = require('http-status-codes');
const listAllCategories = require('../../services/category/listAllCategories');

module.exports = async (req, res, next) => {
  try {
    const categoryList = await listAllCategories();

    return res.status(StatusCodes.OK).send(categoryList);
  } catch (err) {
    next(err);
  }
};
