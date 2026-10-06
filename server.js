const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Test route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'AI FitTrack API is running successfully',
    version: '1.0.0'
  });
});

// Auth routes
app.use('/api/auth', authRoutes);

// Workout routes
app.use('/api/workouts', workoutRoutes);

// AI routes
app.use('/api/ai', aiRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});