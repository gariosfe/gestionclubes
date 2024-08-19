const db = require('../conexion/conexion');

// Function to create a new Career
const createCareer = (name, description, callback) => {
  const query = 'INSERT INTO Career (name, description) VALUES (?, ?)';
  db.query(query, [name, description], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Careers
const getAllCareers = (callback) => {
  const query = 'SELECT * FROM Careers';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Career by ID
const getCareerById = (idCareer, callback) => {
  const query = 'SELECT * FROM Career WHERE idCareer = ?';
  db.query(query, [idCareer], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Career
const updateCareer = (idCareer, name, description, callback) => {
  const query = 'UPDATE Career SET name = ?, description = ? WHERE idCareer = ?';
  db.query(query, [name, description, idCareer], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Career
const deleteCareer = (idCareer, callback) => {
  const query = 'DELETE FROM Career WHERE idCareer = ?';
  db.query(query, [idCareer], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createCareer,
  getAllCareers,
  getCareerById,
  updateCareer,
  deleteCareer
};