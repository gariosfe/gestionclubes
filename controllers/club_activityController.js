const Club_Activities = require('../models/club_activityModel');

// Create a Club_Activity
exports.createClub_Activity = (req, res) => {
  const { name, description, start_date, end_date, club_idclub } = req.body;
  Club_Activities.createClub_Activity(name, description, start_date, end_date, club_idclub, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, name, description, start_date, end_date, club_idclub });
  });
};

// Get all Club_Activity
exports.getAllClub_Activities = (req, res) => {
    Club_Activities.getAllClub_Activities((err, club_activities) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(club_activities);
  });
};

// Get a Club_Activity by ID
exports.getClub_ActivityById = (req, res) => {
  const { id } = req.params;
  Club_Activities.getClub_ActivityById(id, (err, club_activity) => {
    if (err) return res.status(500).send(err);
    if (!club_activity) return res.status(404).json({ message: 'Club_Activity not found' });
    res.status(200).json(club_activity);
  });
};

// Update a Club_Activity
exports.updateClub_Activity = (req, res) => {
  const { id } = req.params;
  const { name, description, start_date, end_date, club_idclub } = req.body;
  Club_Activities.updateClub_Activity(id, name, description, start_date, end_date, club_idclub, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Club_Activity not found' });
    res.status(200).json({ message: 'Club_Activity updated successfully' });
  });
};

// Delete a Club_Activity
exports.deleteClub_Activity = (req, res) => {
  const { id } = req.params;
  Club_Activities.deleteClub_Activity(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Club_Activity not found' });
    res.status(200).json({ message: 'Club_Activity deleted successfully' });
  });
};