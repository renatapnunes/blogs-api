const express = require('express');
const userRoutes = require('./userRoutes');

const route = express.Router({ mergeParams: true });

route.use('/user', userRoutes);

module.exports = route;
