const express = require('express');
const router = express.Router();
const queryController = require('../controllers/query');

// POST route to submit a query
router.post('/add-query', queryController.addQuery);

module.exports = router;
