const express = require('express');
const CarsController = require('../controller/cars');

const router = express.Router();
router.post('/cars', CarsController.createCar)

module.exports = router;