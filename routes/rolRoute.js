const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

// Define the routes for user operations
router.post('/rols', rolController.createRol);
router.get('/rols', rolController.getAllRols);
router.get('/rols/:id', rolController.getRolById);
router.put('/rols/:id', rolController.updateRol);
router.delete('/rols/:id', rolController.deleteRol);

module.exports = router;