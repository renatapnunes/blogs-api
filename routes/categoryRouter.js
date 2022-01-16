const express = require('express');
const createController = require('../controllers/category/create');
const auth = require('../middlewares/auth');

const categoryRouter = express.Router({ mergeParams: true });

categoryRouter.post('/', auth, createController);

module.exports = categoryRouter;
