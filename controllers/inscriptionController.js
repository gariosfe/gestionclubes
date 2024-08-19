const Inscriptions = require('../models/inscriptionModel');

// Create a Inscription
exports.createInscription = (req, res) => {
  const { fk_User, fk_evento, registration_date } = req.body;
  Inscriptions.createInscription(fk_User, fk_evento, registration_date, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, afk_User, fk_evento, registration_date });
  });
};

// Get all Inscription
exports.getAllInscriptions = (req, res) => {
    Inscriptions.getAllInscriptions((err, inscriptions) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(inscriptions);
  });
};

// Get a Inscription by ID
exports.getInscriptionById = (req, res) => {
  const { id } = req.params;
  Inscriptions.getInscriptionById(id, (err, inscription) => {
    if (err) return res.status(500).send(err);
    if (!inscription) return res.status(404).json({ message: 'Inscription not found' });
    res.status(200).json(inscription);
  });
};

// Update a Inscription
exports.updateInscription = (req, res) => {
  const { id } = req.params;
  const { fk_User, fk_evento, registration_date } = req.body;
  Inscriptions.updateInscription(id, fk_User, fk_evento, registration_date, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Inscription not found' });
    res.status(200).json({ message: 'Inscription updated successfully' });
  });
};

// Delete a Inscription
exports.deleteInscription = (req, res) => {
  const { id } = req.params;
  Inscriptions.deleteInscription(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Inscription not found' });
    res.status(200).json({ message: 'Inscription deleted successfully' });
  });
};