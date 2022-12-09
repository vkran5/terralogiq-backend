const express = require('express');
const { readToken } = require('../config/encrypt');
const { authController } = require('../controllers');
const route = express.Router();

route.post('/login', authController.login);
route.get('/keep_login', readToken, authController.KeepLogin)

module.exports = route;