const express = require('express');
const path = require('path');
require('dotenv').config()

// Init express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// simple route for testing - to delete later
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js Test App');
});

module.exports = app; 