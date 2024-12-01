const express = require('express');
const router = express.Router();
const dreamController = require('../controllers/dreamController');

router.get('/analize', dreamController.analyzeDream);

module.exports = router;