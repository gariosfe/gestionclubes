const db = require('../conexion/conexion');

// Function to create a new inscription
const createInscription = (fk_User, fk_evento, registration_date, callback) => {
  const query = 'INSERT INTO inscription (fk_User, fk_evento, registration_date) VALUES (?, ?, ?)';
  db.query(query, [fk_User, fk_evento, registration_date], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Inscriptions
const getAllInscriptions = (callback) => {
  const query = 'SELECT * FROM Inscriptions';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Inscription by ID
const getInscriptionById = (idInscription, callback) => {
  const query = 'SELECT * FROM Inscription WHERE idInscription = ?';
  db.query(query, [idInscription], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Inscription
const updateInscription = (idInscription, fk_User, fk_evento, registration_date, callback) => {
  const query = 'UPDATE Inscription SET fk_User = ?, fk_evento = ?, registration_date = ? WHERE idInscription = ?';
  db.query(query, [fk_User, fk_evento, registration_date, idInscription], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Inscription
const deleteInscription = (idInscription, callback) => {
  const query = 'DELETE FROM Inscription WHERE idInscription = ?';
  db.query(query, [idInscription], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createInscription,
  getAllInscriptions,
  getInscriptionById,
  updateInscription,
    
};