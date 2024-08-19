const express = require('express');
const router = express.Router();
const club_activityController = require('../controllers/club_activityController');

// Define the routes for user operations
router.post('/club_activities', club_activityController.createClub_Activity);
router.get('/club_activities', club_activityController.getAllClub_Activities);
router.get('/club_activities/:id', club_activityController.getClub_ActivityById);
router.put('/club_activities/:id', club_activityController.updateClub_Activity);
router.delete('/club_activities/:id', club_activityController.deleteClub_Activity);

module.exports = router;