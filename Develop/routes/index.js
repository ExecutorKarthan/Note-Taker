// Import required modules0
const router = require('express').Router();
const notes = require('./notes');

// Define the router for later use
router.use('/notes', notes);

// Export the router module for use
module.exports = router;