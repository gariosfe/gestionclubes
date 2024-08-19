const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');

// Define the routes for user operations
router.post('/clubs', clubController.createClub);
router.get('/clubs', clubController.getAllClubs);
router.get('/clubs/:id', clubController.getClubById);
router.put('/clubs/:id', clubController.updateClub);
router.delete('/clubs/:id', clubController.deleteClub);

module.exports = router;