const express = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const categoryRouter = require('./categoryRouter');

const route = express.Router({ mergeParams: true });

route.use('/user', userRouter);
route.use('/login', loginRouter);
route.use('/categories', categoryRouter);

module.exports = route;
