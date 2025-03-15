const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const isLogin = require('../middleware/AuthMiddleware');

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.get('/dashboard', UserController.dashboard)
router.get('/profile', isLogin, UserController.profile)
router.post('/profile', isLogin, UserController.updateProfile)

module.exports = router