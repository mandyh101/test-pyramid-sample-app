require('dotenv').config();
const express = require('express');
const path = require('path');

// Import database models
const db = require('./models');

// Init express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Person routes
app.get('/api/persons', async (req, res) => {
  try {
    const persons = await db.Person.findAll();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// simple route for testing - to delete later
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js Test App');
});

module.exports = app; 