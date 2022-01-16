const express = require('express');
const createController = require('../controllers/user/create');
const readController = require('../controllers/user/read');
const auth = require('../middlewares/auth');

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/', createController);
userRouter.get('/', auth, readController);
userRouter.get('/:id', auth, readController);

module.exports = userRouter;
