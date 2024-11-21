const express = require('express');
const app = express();
const port = 3000;

// Middleware
const logger = require('./middlewares/logger');
const validator = require('./middlewares/validator');

// Routes
const userRoutes = require('./routes/userRoutes');

// Middleware to log requests
app.use(logger);

// Middleware to parse JSON bodies
app.use(express.json());

// User routes
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
