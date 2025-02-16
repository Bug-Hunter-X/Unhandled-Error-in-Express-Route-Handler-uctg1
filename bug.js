const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or is out of range
  const user = users[userId];
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});