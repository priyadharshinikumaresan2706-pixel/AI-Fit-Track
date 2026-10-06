const Workout = require('../models/Workout');

// Create Workout
const createWorkout = async (req, res) => {
  try {
    const {
      name,
      type,
      duration,
      caloriesBurned,
      notes
    } = req.body;

    if (!name || !type || !duration) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, type and duration'
      });
    }

    const workout = await Workout.create({
      user: req.user._id,
      name,
      type,
      duration,
      caloriesBurned: caloriesBurned || 0,
      notes
    });

    res.status(201).json({
      success: true,
      message: 'Workout created successfully',
      workout
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get My Workouts
const getMyWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({
      user: req.user._id
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: workouts.length,
      workouts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  createWorkout,
  getMyWorkouts
};