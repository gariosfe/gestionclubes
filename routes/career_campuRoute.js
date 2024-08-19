const express = require('express');
const router = express.Router();
const career_campuController = require('../controllers/career_campuController');

// Define the routes for user operations
router.post('/career_campus', career_campuController.createCareer_campu);
router.get('/career_campus', career_campuController.getAllCareer_campus);
router.get('/career_campus/:id', career_campuController.getCareer_campuById);
router.put('/career_campus/:id', career_campuController.updateCareer_campu);
router.delete('/career_campus/:id', career_campuController.deleteCareer_campu);

module.exports = router;