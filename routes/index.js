const express = require('express');
const userRouter = require('./userRoutes');
const loginRouter = require('./loginRoutes');

const route = express.Router({ mergeParams: true });

route.use('/user', userRouter);
route.use('/login', loginRouter);

module.exports = route;
