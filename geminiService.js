const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// Generate Workout Recommendation
const generateWorkoutRecommendation = async (
  age,
  fitnessGoal,
  experience
) => {
  try {
    const prompt = `
You are a professional fitness assistant.

Create a safe and practical workout recommendation based on:

Age: ${age}
Fitness Goal: ${fitnessGoal}
Experience Level: ${experience}

Provide:
1. Warm-up
2. Main workout
3. Cool-down
4. Recommended duration
5. Weekly frequency
6. Simple safety tips

Keep the recommendation clear and beginner-friendly.
Do not provide extreme exercise, restrictive eating, or body-image advice.
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
      contents: prompt
    });

    return response.text;
  } catch (error) {
    console.error('Gemini Workout Error:', error.message);
    throw new Error(
      'Failed to generate workout recommendation from Gemini AI'
    );
  }
};


// Generate Fitness Insights
const generateFitnessInsights = async (
  age,
  fitnessGoal,
  experience
) => {
  try {
    const prompt = `
You are a professional fitness assistant.

Provide general and safe fitness insights based on:

Age: ${age}
Fitness Goal: ${fitnessGoal}
Experience Level: ${experience}

Include:
1. General fitness guidance
2. Activity consistency tips
3. Recovery and rest tips
4. Simple safety tips

Keep the information beginner-friendly.
Do not provide extreme exercise, restrictive eating, weight-loss targets, or body-image advice.
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
      contents: prompt
    });

    return response.text;
  } catch (error) {
    console.error('Gemini Insights Error:', error.message);
    throw new Error(
      'Failed to generate fitness insights from Gemini AI'
    );
  }
};


module.exports = {
  generateWorkoutRecommendation,
  generateFitnessInsights
};