const Campus = require('../models/campusModel');

// Create a Campus
exports.createCampu = (req, res) => {
  const { name_campus } = req.body;
  Campus.createCampu(name_campus, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, name_campus });
  });
};

// Get all Campus
exports.getAllCampus = (req, res) => {
    Campus.getAllCampus((err, campus) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(campus);
  });
};

// Get a Campus by ID
exports.getCampuById = (req, res) => {
  const { id } = req.params;
  Campus.getCampuById(id, (err, campus) => {
    if (err) return res.status(500).send(err);
    if (!campus) return res.status(404).json({ message: 'Campus not found' });
    res.status(200).json(campus);
  });
};

// Update a Campus
exports.updateCampu = (req, res) => {
  const { id } = req.params;
  const { name_campus } = req.body;
  Campus.updateCampu(id, name_campus, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Campus not found' });
    res.status(200).json({ message: 'Campus updated successfully' });
  });
};

// Delete a Campus
exports.deleteCampu = (req, res) => {
  const { id } = req.params;
  Campus.deleteCampu(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Campu not found' });
    res.status(200).json({ message: 'Campu deleted successfully' });
  });
};