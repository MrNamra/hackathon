const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const { jwtMiddleware } = require('../middleware/AuthMiddleware');

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.get('/dashboard', jwtMiddleware, UserController.dashboard)
router.get('/profile', jwtMiddleware, UserController.profile)
router.post('/profile', jwtMiddleware, UserController.updateProfile)

module.exports = router