const express = require('express');
const cors = require('cors');
const foodRoutes = require('./routes/foodRoutes');
const fastingRoutes = require('./routes/fastingRoutes');
const plannerRoutes = require('./routes/plannerRoutes');
const dreamRoutes = require('./routes/dreamRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Routes
app.use('/api/food', foodRoutes);
app.use('/api/fasting', fastingRoutes);
app.use('/api/planner', plannerRoutes);
app.use('/api/dream-controller', dreamRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});