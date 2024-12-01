const express = require('express');
const router = express.Router();
const plannerController = require('../controllers/plannerController');

router.get('/schedule', plannerController.generateSchedule);

module.exports = router;