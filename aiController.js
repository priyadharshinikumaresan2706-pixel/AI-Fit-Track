const {
  generateWorkoutRecommendation,
  generateFitnessInsights
} = require('../services/geminiService');

// Generate AI Workout Recommendation
const getWorkoutRecommendation = async (req, res) => {
  try {
    const { age, fitnessGoal, experience } = req.body;

    if (!age || !fitnessGoal || !experience) {
      return res.status(400).json({
        success: false,
        error: 'Please provide age, fitnessGoal and experience'
      });
    }

    const recommendation = await generateWorkoutRecommendation(
      age,
      fitnessGoal,
      experience
    );

    res.json({
      success: true,
      message: 'Workout recommendation generated successfully',
      recommendation
    });
  } catch (error) {
    console.error('AI Controller Error:', error.message);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Generate AI Fitness Insights
const getFitnessInsights = async (req, res) => {
  try {
    const { age, fitnessGoal, experience } = req.body;

    if (!age || !fitnessGoal || !experience) {
      return res.status(400).json({
        success: false,
        error: 'Please provide age, fitnessGoal and experience'
      });
    }

    const insights = await generateFitnessInsights(
      age,
      fitnessGoal,
      experience
    );

    res.json({
      success: true,
      message: 'Fitness insights generated successfully',
      insights
    });
  } catch (error) {
    console.error('AI Insights Error:', error.message);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getWorkoutRecommendation,
  getFitnessInsights
};