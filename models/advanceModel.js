const db = require('../conexion/conexion');

// Function to create a new Advance
const createAdvance = (advance, start_date, deliver_date, entregado, callback) => {
  const query = 'INSERT INTO Advance (advance, start_date, deliver_date, entregado) VALUES (?, ?, ?, ?)';
  db.query(query, [advance, start_date, deliver_date, entregado], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Advances
const getAllAdvances = (callback) => {
  const query = 'SELECT * FROM Advances';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Advance by ID
const getAdvanceById = (idAdvance, callback) => {
  const query = 'SELECT * FROM Advance WHERE idAdvance = ?';
  db.query(query, [idAdvance], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Advance
const updateAdvance = (idAdvance, advance, start_date, deliver_date, entregado, callback) => {
  const query = 'UPDATE Advance SET advance = ?, start_date = ?, deliver_date = ?, entregado = ? WHERE idAdvance = ?';
  db.query(query, [advance, start_date, deliver_date, entregado, idAdvance], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Advance
const deleteAdvance = (idAdvance, callback) => {
  const query = 'DELETE FROM Advance WHERE idAdvance = ?';
  db.query(query, [idAdvance], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createAdvance,
  getAllAdvances,
  getAdvanceById,
  updateAdvance,
  deleteAdvance
};