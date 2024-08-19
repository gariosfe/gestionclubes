const Events = require('../models/eventModel');

// Create a Event
exports.createEvent = (req, res) => {
  const { name, event_date, fk_speakers, fk_organizer, description } = req.body;
  Events.createEvent(name, event_date, fk_speakers, fk_organizer, description, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, name, event_date, fk_speakers, fk_organizer, description });
  });
};

// Get all Events
exports.getAllEvents = (req, res) => {
    Events.getAllEvents((err, events) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(events);
  });
};

// Get a Event by ID
exports.getEventById = (req, res) => {
  const { id } = req.params;
  Events.getEventById(id, (err, event) => {
    if (err) return res.status(500).send(err);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json(event);
  });
};

// Update a Event
exports.updateEvent = (req, res) => {
  const { id } = req.params;
  const { name, event_date, fk_speakers, fk_organizer, description } = req.body;
  Events.updateEvent(id, name, event_date, fk_speakers, fk_organizer, description, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event updated successfully' });
  });
};

// Delete a Event
exports.deleteEvent = (req, res) => {
  const { id } = req.params;
  Events.deleteEvent(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event deleted successfully' });
  });
};