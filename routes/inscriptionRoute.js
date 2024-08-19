const express = require('express');
const router = express.Router();
const inscriptionController = require('../controllers/inscriptionController');

// Define the routes for  operations
router.post('/inscriptions', inscriptionController.createInscription);
router.get('/inscriptions', inscriptionController.getAllInscriptions);
router.get('/inscriptions/:id', inscriptionController.getInscriptionById);
router.put('/inscriptions/:id', inscriptionController.updateInscription);
router.delete('/inscriptions/:id', inscriptionController.deleteInscription);

module.exports = router;