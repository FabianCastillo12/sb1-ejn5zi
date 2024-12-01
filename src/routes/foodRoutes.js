const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/analize', foodController.analyzeFood);
router.get('/generate', foodController.generateRecipe);

module.exports = router;