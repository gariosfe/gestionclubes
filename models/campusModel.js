const db = require('../conexion/conexion');

// Function to create a new Campus
const createCampu = (name_campus, callback) => {
  const query = 'INSERT INTO Campus (name_campus) VALUES (?)';
  db.query(query, [name_campus], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Campus
const getAllCampus = (callback) => {
  const query = 'SELECT * FROM Campus';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Campu by ID
const getCampuById = (idCampu, callback) => {
  const query = 'SELECT * FROM Campus WHERE idCampu = ?';
  db.query(query, [idCampu], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Campu
const updateCampu = (idCampu, name_campus, callback) => {
  const query = 'UPDATE Campus SET name_campus = ? WHERE idCampu = ?';
  db.query(query, [name_campus, idCampu], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Campu
const deleteCampu = (idCampu, callback) => {
  const query = 'DELETE FROM Campu WHERE idCampu = ?';
  db.query(query, [idCampu], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createCampu,
  getAllCampus,
  getCampuById,
  updateCampu,
  deleteCampu
};