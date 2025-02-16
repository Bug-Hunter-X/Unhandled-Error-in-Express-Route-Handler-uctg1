const express = require('express');
const app = express();

const users = {
  '1': { id: 1, name: 'John Doe' },
  '2': { id: 2, name: 'Jane Smith' }
};

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  // Error Handling for invalid user ID
  if (isNaN(userId) || userId < 1 || userId > Object.keys(users).length) {
    return res.status(400).send('Invalid user ID');
  }

  const user = users[userId];
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});