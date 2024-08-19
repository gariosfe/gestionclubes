const Advances = require('../models/advanceModel');

// Create a Advance
exports.createAdvance = (req, res) => {
  const { advance, start_date, deliver_date, entregado } = req.body;
  Advances.createAdvance(advance, start_date, deliver_date, entregado, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, advance, start_date, deliver_date, entregado });
  });
};

// Get all Advances
exports.getAllAdvances = (req, res) => {
    Advances.getAllAdvances((err, advances) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(advances);
  });
};

// Get a Advance by ID
exports.getAdvanceById = (req, res) => {
  const { id } = req.params;
  Advances.getAdvanceById(id, (err, advance) => {
    if (err) return res.status(500).send(err);
    if (!advance) return res.status(404).json({ message: 'Advance not found' });
    res.status(200).json(advance);
  });
};

// Update a Advance
exports.updateAdvance = (req, res) => {
  const { id } = req.params;
  const { advance, start_date, deliver_date, entregado } = req.body;
  Advances.updateAdvance(id, advance, start_date, deliver_date, entregado, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Advance not found' });
    res.status(200).json({ message: 'Advance updated successfully' });
  });
};

// Delete a Advance
exports.deleteAdvance = (req, res) => {
  const { id } = req.params;
  Advances.deleteAdvance(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Advance not found' });
    res.status(200).json({ message: 'Advance deleted successfully' });
  });
};