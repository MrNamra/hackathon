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
 *               traffic_volume:
 *                 type: number
 *                 example: 100
 *                 required: false
 *               vehicle_speed:
 *                 type: number
 *                 example: 60
 *                 required: false
 *               road_type:
 *                 type: string
 *                 example: "highway"
 *                 enum: ['highway', 'commercial', 'rural', 'urban', 'city center', 'suburban']
 *                 required: true
 *               weather:
 *                 type: string
 *                 example: "sunny"
 *                 enum: ['sunny', 'rain', 'cloudy']
 *                 required: true
 *               temperature:
 *                 type: number
 *                 example: 25.32
 *                 required: false
 *               humidity:
 *                 type: number
 *                 example: 60.5                 
 *                 required: false
 *               precipitation:
 *                 type: number
 *                 example: 0.5
 *                 required: false
 *               accidents:
 *                 type: number
 *                 example: 2
 *                 required: false
 *               road_closure:
 *                 type: boolean
 *                 example: false
 *                 required: false
 *               event:
 *                 type: string
 *                 example: "I don't konow what come here"
 *                 required: false
 *               public_transport_usage:
 *                 type: number
 *                 example: 80
 *                 required: false
 *               weather_temperature:
 *                 type: number
 *                 example: 25.32
 *                 required: false
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
 *                 example: "67890 not required"
 *                 required: false
 *               age:
 *                 type: integer
 *                 example: 25
 *                 required: true
 *               gender:
 *                 type: string
 *                 example: "male"
 *                 enum: ['male', 'female', 'other']
 *                 required: true
 *               fever:
 *                 type: boolean
 *                 example: true
 *                 required: true
 *               cough:
 *                 type: boolean
 *                 example: true
 *                 required: true
 *               shortness_of_breath:
 *                 type: boolean
 *                 example: true
 *                 required: true
 *               travel_history:
 *                 type: boolean
 *                 example: true
 *                 required: true
 *               hospital_visits:
 *                 type: integer
 *                 example: 2
 *                 required: false
 *                 default: 0
 *               vaccination_status:
 *                 type: string
 *                 example: "Fully Vaccinated"
 *                 required: true
 *                 emun: ['partially vaccinated', 'vaccinated', 'not vaccinated']
 *               infection_risk:
 *                 type: interger
 *                 example: 0
 *                 required: true
 *                 default: 0
 *               air_quality_index:
 *                 type: integer
 *                 example: 0
 *                 required: false
 *               population_density:
 *                 type: integer
 *                 example: 0
 *                 required: false
 *               social_media_alerts:
 *                 type: string
 *                 example: "I don't konow what come here(HIGH RISK, mid risk, etc)"
 *                 required: false
 *     responses:
 *       201:
 *         description: Health data added successfully
 */
router.post("/health", IotController.addHelthData);

module.exports = router;
