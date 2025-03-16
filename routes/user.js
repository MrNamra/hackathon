const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const { jwtMiddleware } = require("../middleware/AuthMiddleware");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User authentication and profile management
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     description: Create a new user account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Raju
 *               email:
 *                 type: string
 *                 example: test@test.com
 *               password:
 *                 type: string
 *                 example: password123
 *               conmirmpassword:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Email already registered or password mismatch
 */
router.post("/register", UserController.register);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User login
 *     tags: [User]
 *     description: Authenticate user and generate JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@test.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", UserController.login);

/**
 * @swagger
 * /api/user/dashboard:
 *   get:
 *     summary: Get dashboard data
 *     tags: [User]
 *     description: Retrieve dashboard statistics
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard data retrieved successfully
 *       401:
 *          description: Unauthorized
 */
router.get("/dashboard", jwtMiddleware, UserController.dashboard);

/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [User]
 *     description: Retrieve user profile details
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 */
router.get("/profile", jwtMiddleware, UserController.profile);

/**
 * @swagger
 * /api/user/profile:
 *   post:
 *     summary: Update user profile
 *     tags: [User]
 *     description: Modify user profile details
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Raju Kaju
 *               email:
 *                 type: string
 *                 example: test@gmail.com
 *               password:
 *                 type: string
 *                 example: 12345678
 *               conmirmpassword:
 *                 type: string
 *                 example: 12345678
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       400:
 *         description: Password mismatch or missing fields
 */
router.post("/profile", jwtMiddleware, UserController.updateProfile);

module.exports = router;
