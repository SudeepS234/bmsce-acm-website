const express = require('express');
const router = express.Router();

// Example API route
router.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

module.exports = router;
