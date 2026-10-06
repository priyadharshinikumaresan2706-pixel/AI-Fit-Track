const express = require('express');

const {
  getWorkoutRecommendation,
  getFitnessInsights
} = require('../controllers/aiController');

const { protect } = require('../middleware/auth');

const router = express.Router();

// AI Workout Recommendation
router.post(
  '/workout-recommendation',
  protect,
  getWorkoutRecommendation
);

// AI Fitness Insights
router.post(
  '/fitness-insights',
  protect,
  getFitnessInsights
);

module.exports = router;