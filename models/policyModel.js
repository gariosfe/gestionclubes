const db = require('../conexion/conexion');

// Function to create a new policy
const createPolicy = (description, mandatory, callback) => {
  const query = 'INSERT INTO Policy (description, mandatory) VALUES (?, ?)';
  db.query(query, [description, mandatory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Policies
const getAllPolicies = (callback) => {
  const query = 'SELECT * FROM Policies';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Policy by ID
const getPolicyById = (idPolicy, callback) => {
  const query = 'SELECT * FROM Policy WHERE idPolicy = ?';
  db.query(query, [idPolicy], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Policy
const updatePolicy = (idPolicy, description, mandatory, callback) => {
  const query = 'UPDATE Policy SET description = ?, mandatory = ? WHERE idPolicy = ?';
  db.query(query, [description, mandatory, idPolicy], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Policy
const deletePolicy = (idPolicy, callback) => {
  const query = 'DELETE FROM Policy WHERE idPolicy = ?';
  db.query(query, [idPolicy], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createPolicy,
  getAllPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy
};