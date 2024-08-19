const Resources = require('../models/resourceModel');

// Create a Resource
exports.createResource = (req, res) => {
  const { name, descripcion, amount } = req.body;
  Resources.createResource(name, descripcion, amount, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, name, descripcion, amount });
  });
};

// Get all Resource
exports.getAllResources = (req, res) => {
    Resources.getAllResources((err, resources) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(resources);
  });
};

// Get a Resource by ID
exports.getResourceById = (req, res) => {
  const { id } = req.params;
  Resources.getResourceById(id, (err, resource) => {
    if (err) return res.status(500).send(err);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json(resource);
  });
};

// Update a Resource
exports.updateResource = (req, res) => {
  const { id } = req.params;
  const { name, descripcion, amount } = req.body;
  Resources.updateResource(id, name, descripcion, amount, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json({ message: 'Resource updated successfully' });
  });
};

// Delete a Resource
exports.deleteResource = (req, res) => {
  const { id } = req.params;
  Resources.deleteResource(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json({ message: 'Resource deleted successfully' });
  });
};