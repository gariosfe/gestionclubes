const Authentications = require('../models/authenticationModel');

// Create a Authentication
exports.createAuthentication = (req, res) => {
  const { admision_date, session_time, password, fk_User } = req.body;
  Authentications.createAuthentication(admision_date, session_time, password, fk_User, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, admision_date, session_time, password, fk_User });
  });
};

// Get all Authentication
exports.getAllAuthentications = (req, res) => {
    Authentications.getAllAuthentications((err, authentications) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(authentications);
  });
};

// Get a Authentication by ID
exports.getAuthenticationById = (req, res) => {
  const { id } = req.params;
  Authentications.getAuthenticationById(id, (err, authentication) => {
    if (err) return res.status(500).send(err);
    if (!authentication) return res.status(404).json({ message: 'authentication not found' });
    res.status(200).json(authentication);
  });
};

// Update a Authentication
exports.updateAuthentication = (req, res) => {
  const { id } = req.params;
  const { admision_date, session_time, password, fk_User } = req.body;
  Authentications.updateAuthentication(id, admision_date, session_time, password, fk_User, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Authentication not found' });
    res.status(200).json({ message: 'Authentication updated successfully' });
  });
};

// Delete a Authentication
exports.deleteAuthentication = (req, res) => {
  const { id } = req.params;
  Authentications.deleteAuthentication(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Authentication not found' });
    res.status(200).json({ message: 'Authentication deleted successfully' });
  });
};