const express = require('express');
const router = express.Router();
const campusController = require('../controllers/campusController');

// Define the routes for user operations
router.post('/campus', campusController.createCampu);
router.get('/campus', campusController.getAllCampus);
router.get('/campus/:id', campusController.getCampuById);
router.put('/campus/:id', campusController.updateCampu);
router.delete('/campus/:id', campusController.deleteCampu);

module.exports = router;