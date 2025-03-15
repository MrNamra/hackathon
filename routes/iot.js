const express = require('express');
const router = express.Router();
const IotController = require('../controller/IotController');

router.get('/trafic', IotController.getTrafficData)
router.post('/trafic', IotController.addTrafficData)
router.get('/helth', IotController.getHelthData)
router.post('/helth', IotController.addHelthData)

module.exports = router