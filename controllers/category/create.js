const { StatusCodes } = require('http-status-codes');
const createCategory = require('../../services/category/createCategory');

module.exports = async (req, res, next) => {
  try {
    const nameCategory = req.body;

    const newCategory = await createCategory(nameCategory);
    if ('error' in newCategory) return next(newCategory.error);
  
    return res.status(StatusCodes.CREATED).send(newCategory);
  } catch (err) {
    next(err);
  }
};
