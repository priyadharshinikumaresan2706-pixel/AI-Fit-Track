const express = require('express');

const {
  createWorkout,
  getMyWorkouts
} = require('../controllers/workoutController');

const { protect } = require('../middleware/auth');

const router = express.Router();

// Create workout
router.post('/', protect, createWorkout);

// Get my workouts
router.get('/', protect, getMyWorkouts);

module.exports = router;