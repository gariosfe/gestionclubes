const Careers = require('../models/careerModel');

// Create a Career
exports.createCareer = (req, res) => {
  const { name, description } = req.body;
  Careers.createCareer(name, description, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, name, description });
  });
};

// Get all Careers
exports.getAllCareers = (req, res) => {
    Careers.getAllCareers((err, careers) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(careers);
  });
};

// Get a Career by ID
exports.getCareerById = (req, res) => {
  const { id } = req.params;
  Careers.getCareerById(id, (err, career) => {
    if (err) return res.status(500).send(err);
    if (!career) return res.status(404).json({ message: 'Career not found' });
    res.status(200).json(career);
  });
};

// Update a Career
exports.updateCareer = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  Careers.updateCareer(id, name, description, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Career not found' });
    res.status(200).json({ message: 'Career updated successfully' });
  });
};

// Delete a Career
exports.deleteCareer = (req, res) => {
  const { id } = req.params;
  Careers.deleteCareer(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Career not found' });
    res.status(200).json({ message: 'Career deleted successfully' });
  });
};