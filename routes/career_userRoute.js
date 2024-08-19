const express = require('express');
const router = express.Router();
const career_userController = require('../controllers/career_userController');

// Define the routes for user operations
router.post('/career_users', career_userController.createCareer_User);
router.get('/career_users', career_userController.getAllCareer_Users);
router.get('/career_users/:id', career_userController.getCareer_UserById);
router.put('/career_users/:id', career_userController.updateCareer_User);
router.delete('/career_users/:id', career_userController.deleteCareer_User);

module.exports = router;