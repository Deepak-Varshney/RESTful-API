const express = require('express');
const router = express.Router();
const users = require('../data/users');
const validator = require('../middlewares/validator');

// GET /users – Fetch the list of all users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id – Fetch a specific user by ID
router.get('/:id', (req, res) => {
  const user = users.find(user => user.id === req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST /user – Add a new user
router.post('/', validator, (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /user/:id – Update user details
router.put('/:id', validator, (req, res) => {
  const userIndex = users.findIndex(user => user.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[userIndex] = req.body;
  res.status(200).json(users[userIndex]);
});

// DELETE /user/:id – Delete user by ID
router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex(user => user.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.status(204).send();
});

module.exports = router;
