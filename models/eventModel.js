const db = require('../conexion/conexion');

// Function to create a new Event
const createEvent = (name, event_date, fk_speakers, fk_organizer, description, callback) => {
  const query = 'INSERT INTO Event (name, event_date, fk_speakers, fk_organizer, description) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, event_date, fk_speakers, fk_organizer, description], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Events
const getAllEvents = (callback) => {
  const query = 'SELECT * FROM Events';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Event by ID
const getEventById = (idEvent, callback) => {
  const query = 'SELECT * FROM Event WHERE idEvent = ?';
  db.query(query, [idEvent], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Event
const updateEvent = (idEvent, name, event_date, fk_speakers, fk_organizer, description, callback) => {
  const query = 'UPDATE Event SET name = ?, event_date = ?, fk_speakers = ?, fk_organizer = ?, description = ? WHERE idEvent = ?';
  db.query(query, [name, event_date, fk_speakers, fk_organizer, description, idEvent], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Event
const deleteEvent = (idEvent, callback) => {
  const query = 'DELETE FROM Event WHERE idEvent = ?';
  db.query(query, [idEvent], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};