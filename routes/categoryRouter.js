const express = require('express');
const createController = require('../controllers/category/create');
const readController = require('../controllers/category/read');
const auth = require('../middlewares/auth');

const categoryRouter = express.Router({ mergeParams: true });

categoryRouter.post('/', auth, createController);
categoryRouter.get('/', auth, readController);

module.exports = categoryRouter;
