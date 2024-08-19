const db = require('../conexion/conexion');

// Function to create a new Resource
const createResource = (name, descripcion, amount, callback) => {
  const query = 'INSERT INTO Resource (name, descripcion, amount) VALUES (?, ?, ?)';
  db.query(query, [name, descripcion, amount], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Resources
const getAllResources = (callback) => {
  const query = 'SELECT * FROM Resources';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Resource by ID
const getResourceById = (idResource, callback) => {
  const query = 'SELECT * FROM Resource WHERE idResource = ?';
  db.query(query, [idResource], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Resource
const updateResource = (idResource, name, descripcion, amount, callback) => {
  const query = 'UPDATE Resource SET name = ?, descripcion = ?, amount = ? WHERE idResource = ?';
  db.query(query, [name, descripcion, amount, idResource], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Resource
const deleteResource = (idResource, callback) => {
  const query = 'DELETE FROM Resource WHERE idResource = ?';
  db.query(query, [idResource], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource
};