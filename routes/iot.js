const express = require("express");
const router = express.Router();
const IotController = require("../controller/IotController");

/**
 * @swagger
 * tags:
 *   name: IoT
 *   description: IoT data management
 */

/**
 * @swagger
 * /api/iot/traffic:
 *   get:
 *     summary: Get traffic data
 *     tags: [IoT]
 *     description: Retrieve real-time traffic data
 *     responses:
 *       200:
 *         description: Traffic data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       location:
 *                         type: string
 *                         example: "Downtown"
 *                       congestionLevel:
 *                         type: string
 *                         example: "High"
 */
router.get("/traffic", IotController.getTrafficData);

/**
 * @swagger
 * /api/iot/traffic:
 *   post:
 *     summary: Add traffic data
 *     tags: [IoT]
 *     description: Upload new traffic data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               location:
 *                 type: string
 *                 example: "Main Street"
 *               congestionLevel:
 *                 type: string
 *                 example: "Medium"
 *     responses:
 *       201:
 *         description: Traffic data added successfully
 */
router.post("/traffic", IotController.addTrafficData);

/**
 * @swagger
 * /api/iot/health:
 *   get:
 *     summary: Get health data
 *     tags: [IoT]
 *     description: Retrieve health-related IoT data
 *     responses:
 *       200:
 *         description: Health data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       patientId:
 *                         type: string
 *                         example: "12345"
 *                       heartRate:
 *                         type: integer
 *                         example: 72
 */
router.get("/health", IotController.getHelthData);

/**
 * @swagger
 * /api/iot/health:
 *   post:
 *     summary: Add health data
 *     tags: [IoT]
 *     description: Upload new health-related IoT data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *                 example: "67890"
 *               heartRate:
 *                 type: integer
 *                 example: 80
 *     responses:
 *       201:
 *         description: Health data added successfully
 */
router.post("/health", IotController.addHelthData);

module.exports = router;
