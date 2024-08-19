const db = require('../conexion/conexion');

// Function to create a new Club Activity 
const createClub_Activity = (name, description, start_date, end_date, club_idclub, callback) => {
  const query = 'INSERT INTO Club_Activity (name, description, start_date, end_date, club_idclub) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, description, start_date, end_date, club_idclub], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Club Activities
const getAllClub_Activities = (callback) => {
  const query = 'SELECT * FROM Club_Activities';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Club_Activity by ID
const getClub_ActivityById = (idClub_Activity, callback) => {
  const query = 'SELECT * FROM Club_Activity WHERE idClub_Activity = ?';
  db.query(query, [idClub_Activity], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Club Activity
const updateClub_Activity = (idClub_Activity, name, description, start_date, end_date, club_idclub, callback) => {
  const query = 'UPDATE Club_Activity SET name = ?, description = ?, start_date = ?, end_date = ?, club_idclub = ? WHERE idClub_Activity = ?';
  db.query(query, [name, description, start_date, end_date, club_idclub, idClub_Activity], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Club_Activity
const deleteClub_Activity = (idClub_Activity, callback) => {
  const query = 'DELETE FROM Club_Activity WHERE idClub_Activity = ?';
  db.query(query, [idClub_Activity], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createClub_Activity,
  getAllClub_Activities,
  getClub_ActivityById,
  updateClub_Activity,
  deleteClub_Activity
};