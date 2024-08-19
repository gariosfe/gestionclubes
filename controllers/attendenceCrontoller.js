const Attendences = require('../models/attendenceModel');

// Create a Attendence
exports.createAttendence = (req, res) => {
  const { fk_User, fk_Club_Activity, attendence } = req.body;
  Attendences.createAttendence(fk_User, fk_Club_Activity, attendence, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, fk_User, fk_Club_Activity, attendence });
  });
};

// Get all Attendence
exports.getAllAttendences = (req, res) => {
    Attendences.getAllAttendences((err, attendences) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(attendences);
  });
};

// Get a Attendence by ID
exports.getAttendenceById = (req, res) => {
  const { id } = req.params;
  Attendences.getAttendenceById(id, (err, attendence) => {
    if (err) return res.status(500).send(err);
    if (!attendence) return res.status(404).json({ message: 'Attendence not found' });
    res.status(200).json(attendence);
  });
};

// Update a Attendence
exports.updateAttendence = (req, res) => {
  const { id } = req.params;
  const { fk_User, fk_Club_Activity, attendence } = req.body;
  Attendences.updateAttendence(id, fk_User, fk_Club_Activity, attendence, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Attendence not found' });
    res.status(200).json({ message: 'Attendence updated successfully' });
  });
};

// Delete a Attendence
exports.deleteAttendence = (req, res) => {
  const { id } = req.params;
  Attendences.deleteAttendence(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Attendence not found' });
    res.status(200).json({ message: 'Attendence deleted successfully' });
  });
};