const Career_campus = require('../models/career_campuModel');

// Create a Career_campu
exports.createCareer_campu = (req, res) => {
  const { fk_Career, fk_campus } = req.body;
  Career_campus.createCareer_campu(fk_Career, fk_campus, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, fk_Career, fk_campus });
  });
};

// Get all Career_campu
exports.getAllCareer_campus = (req, res) => {
  Career_campus.getAllCareer_campus((err, career_campus) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(career_campus);
  });
};

// Get a Career_campu by ID
exports.getCareer_campuById = (req, res) => {
  const { id } = req.params;
  Career_campus.getCareer_campuById(id, (err, career_campu) => {
    if (err) return res.status(500).send(err);
    if (!career_campu) return res.status(404).json({ message: 'Career_campu not found' });
    res.status(200).json(career_campu);
  });
};

// Update a Career_campu
exports.updateCareer_campu = (req, res) => {
  const { id } = req.params;
  const { fk_Career, fk_campus } = req.body;
  Career_campus.updateCareer_campu(id, fk_Career, fk_campus, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Career_campu not found' });
    res.status(200).json({ message: 'Career_campu updated successfully' });
  });
};

// Delete a Career_campu
exports.deleteCareer_campu = (req, res) => {
  const { id } = req.params;
  Career_campus.deleteCareer_campu(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Career_campu not found' });
    res.status(200).json({ message: 'Career_campu deleted successfully' });
  });
};