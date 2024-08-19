const Users = require('../models/userModel');

// Create a User
exports.createUser = (req, res) => {
  const { name, email, cellphone, fk_campus, fk_club } = req.body;
  Users.createUser(name, email, cellphone, fk_campus, fk_club, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, name, email, cellphone, fk_campus, fk_club });
  });
};

// Get all User
exports.getAllUsers = (req, res) => {
    Users.getAllUsers((err, users) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(users);
  });
};

// Get a User by ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  Users.getUserById(id, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).json({ message: 'user not found' });
    res.status(200).json(user);
  });
};

// Update a User
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, cellphone, fk_campus, fk_club } = req.body;
  Users.updateUser(id, name, email, cellphone, fk_campus, fk_club, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User updated successfully' });
  });
};

// Delete a User
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  Users.deleteUser(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  });
};