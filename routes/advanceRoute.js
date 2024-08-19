const express = require('express');
const router = express.Router();
const advanceController = require('../controllers/advanceController');

// Define the routes for user operations
router.post('/advances', advanceController.createAdvance);
router.get('/advances', advanceController.getAllAdvances);
router.get('/advances/:id', advanceController.getAdvanceById);
router.put('/advances/:id', advanceController.updateAdvance);
router.delete('/advances/:id', advanceController.deleteAdvance);

module.exports = router;