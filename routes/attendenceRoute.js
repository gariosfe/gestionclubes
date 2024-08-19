const express = require('express');
const router = express.Router();
const attendenceCrontoller = require('../controllers/attendenceCrontoller');

// Define the routes for user operations
router.post('/attendences', attendenceCrontoller.createAttendence);
router.get('/attendences', attendenceCrontoller.getAllAttendences);
router.get('/attendences/:id', attendenceCrontoller.getAttendenceById);
router.put('/attendences/:id', attendenceCrontoller.updateAttendence);
router.delete('/attendences/:id', attendenceCrontoller.updateAttendence);

module.exports = router;