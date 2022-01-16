const express = require('express');
const createController = require('../controllers/blogPost/create');
const readController = require('../controllers/blogPost/read');
const auth = require('../middlewares/auth');

const blogPostRouter = express.Router({ mergeParams: true });

blogPostRouter.post('/', auth, createController);
blogPostRouter.get('/', auth, readController);

module.exports = blogPostRouter;
