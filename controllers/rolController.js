const Rols = require('../models/rolModel');

// Create a Rol
exports.createRol = (req, res) => {
  const { fk_User, fk_Categoy } = req.body;
  Rols.createRol(fk_User, fk_Categoy, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, fk_User, fk_Categoy });
  });
};

// Get all Rol
exports.getAllRols = (req, res) => {
    Rols.getAllRols((err, rols) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(rols);
  });
};

// Get a Rol by ID
exports.getRolById = (req, res) => {
  const { id } = req.params;
  Rols.getRolById(id, (err, rol) => {
    if (err) return res.status(500).send(err);
    if (!rol) return res.status(404).json({ message: 'Rol not found' });
    res.status(200).json(rol);
  });
};

// Update a Rol
exports.updateRol = (req, res) => {
  const { id } = req.params;
  const { fk_User, fk_Categoy } = req.body;
  Rols.updateRol(id, fk_User, fk_Categoy, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Rol not found' });
    res.status(200).json({ message: 'Rol updated successfully' });
  });
};

// Delete a Rol
exports.deleteRol = (req, res) => {
  const { id } = req.params;
  Rols.deleteRol(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Rol not found' });
    res.status(200).json({ message: 'Rol deleted successfully' });
  });
};