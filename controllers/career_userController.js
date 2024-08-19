const Career_Users = require('../models/career_userModel');

// Create a Career_User
exports.createCareer_User = (req, res) => {
  const { fk_Career, fk_User } = req.body;
  Career_Users.createAdvance(fk_Career, fk_User, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, fk_Career, fk_User });
  });
};

// Get all Career_User
exports.getAllCareer_Users = (req, res) => {
    Career_Users.getAllCareer_Users((err, career_users) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(career_users);
  });
};

// Get a Career_User by ID
exports.getCareer_UserById = (req, res) => {
  const { id } = req.params;
  Career_Users.getCareer_UserById(id, (err, career_user) => {
    if (err) return res.status(500).send(err);
    if (!career_user) return res.status(404).json({ message: 'Career_User not found' });
    res.status(200).json(career_user);
  });
};

// Update a Career_User
exports.updateCareer_User = (req, res) => {
  const { id } = req.params;
  const { fk_Career, fk_User } = req.body;
  Career_Users.updateCareer_User(id, fk_Career, fk_User, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Career_User not found' });
    res.status(200).json({ message: 'Career_User updated successfully' });
  });
};

// Delete a Career_User
exports.deleteCareer_User = (req, res) => {
  const { id } = req.params;
  Career_Users.deleteCareer_User(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Career_User not found' });
    res.status(200).json({ message: 'Career_User deleted successfully' });
  });
};