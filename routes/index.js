const express = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const categoryRouter = require('./categoryRouter');
const blogPostRouter = require('./blogPostRouter');

const route = express.Router({ mergeParams: true });

route.use('/user', userRouter);
route.use('/login', loginRouter);
route.use('/categories', categoryRouter);
route.use('/post', blogPostRouter);

module.exports = route;
