const express = require('express');
const createController = require('../controllers/user/create');

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/', createController);

module.exports = userRouter;
