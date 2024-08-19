const Clubs = require('../models/clubModel');

// Create a Club
exports.createClub = (req, res) => {
  const { name, descripcion, fk_Categoy, fk_Policy, fk_resource } = req.body;
  Clubs.createClub(name, descripcion, fk_Categoy, fk_Policy, fk_resource, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, name, descripcion, fk_Categoy, fk_Policy, fk_resource  });
  });
};

// Get all Clubs
exports.getAllClubs = (req, res) => {
    Clubs.getAllClubs((err, clubs) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(clubs);
  });
};

// Get a Club by ID
exports.getClubById = (req, res) => {
  const { id } = req.params;
  Clubs.getClubById(id, (err, club) => {
    if (err) return res.status(500).send(err);
    if (!club) return res.status(404).json({ message: 'Club not found' });
    res.status(200).json(club);
  });
};

// Update a Club
exports.updateClub = (req, res) => {
  const { id } = req.params;
  const { name, descripcion, fk_Categoy, fk_Policy, fk_resource } = req.body;
  Clubs.updateClub(id, name, descripcion, fk_Categoy, fk_Policy, fk_resource, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Club not found' });
    res.status(200).json({ message: 'Club updated successfully' });
  });
};

// Delete a Club
exports.deleteClub = (req, res) => {
  const { id } = req.params;
  Clubs.deleteClub(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Club not found' });
    res.status(200).json({ message: 'Club deleted successfully' });
  });
};