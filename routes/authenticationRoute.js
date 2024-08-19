const express = require('express');
const router = express.Router();
const authenticationCrontroller = require('../controllers/authenticationCrontroller');

// Define the routes for user operations
router.post('/authentications', authenticationCrontroller.createAuthentication);
router.get('/authentications', authenticationCrontroller.getAllAuthentications);
router.get('/authentications/:id', authenticationCrontroller.getAuthenticationById);
router.put('/authentications/:id', authenticationCrontroller.updateAuthentication);
router.delete('/authentications/:id', authenticationCrontroller.deleteAuthentication);

module.exports = router;