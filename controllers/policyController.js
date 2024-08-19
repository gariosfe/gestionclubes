const Policies = require('../models/policyModel');

// Create a Policy
exports.createPolicy = (req, res) => {
  const { description, mandatory } = req.body;
  Policies.createPolicy(description, mandatory, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, description, mandatory });
  });
};

// Get all Policies
exports.getAllPolicies = (req, res) => {
    Policies.getAllPolicies((err, policies) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(policies);
  });
};

// Get a Policy by ID
exports.getPolicyById = (req, res) => {
  const { id } = req.params;
  Policies.getPolicyById(id, (err, policy) => {
    if (err) return res.status(500).send(err);
    if (!policy) return res.status(404).json({ message: 'Policy not found' });
    res.status(200).json(policy);
  });
};

// Update a Policy
exports.updatePolicy = (req, res) => {
  const { id } = req.params;
  const { description, mandatory } = req.body;
  Policies.updatePolicy(id, description, mandatory, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Policy not found' });
    res.status(200).json({ message: 'Policy updated successfully' });
  });
};

// Delete a Policy
exports.deletePolicy = (req, res) => {
  const { id } = req.params;
  Policies.deletePolicy(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Policy not found' });
    res.status(200).json({ message: 'Policy deleted successfully' });
  });
};