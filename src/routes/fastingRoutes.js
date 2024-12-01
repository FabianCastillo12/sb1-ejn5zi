const express = require('express');
const router = express.Router();
const fastingController = require('../controllers/fastingController');

router.get('/generate', fastingController.generateCalories);

module.exports = router;