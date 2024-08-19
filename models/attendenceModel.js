const db = require('../conexion/conexion');

// Function to create a new Attendence
const createAttendence = (fk_User, fk_Club_Activity, attendence, callback) => {
  const query = 'INSERT INTO Attendence (fk_User, fk_Club_Activity, attendence) VALUES (?, ?, ?)';
  db.query(query, [fk_User, fk_Club_Activity, attendence], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Attendences
const getAllAttendences = (callback) => {
  const query = 'SELECT * FROM Attendences';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Attendence by ID
const getAttendenceById = (idAttendence, callback) => {
  const query = 'SELECT * FROM Attendence WHERE idAttendence = ?';
  db.query(query, [idAttendence], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Attendence
const updateAttendence = (idAttendence, fk_User, fk_Club_Activity, attendence, callback) => {
  const query = 'UPDATE Attendence SET fk_User = ?, fk_Club_Activity = ?, attendence = ?  WHERE idAttendence = ?';
  db.query(query, [fk_User, fk_Club_Activity, attendence, idAttendence], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Attendence
const deleteAttendence = (idAttendence, callback) => {
  const query = 'DELETE FROM Attendence WHERE idAttendence = ?';
  db.query(query, [idAttendence], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createAttendence,
  getAllAttendences,
  getAttendenceById,
  updateAttendence,
  updateAttendence
};