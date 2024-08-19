const db = require('../conexion/conexion');

// Function to create a Authentication
const createAuthentication = (admision_date, session_time, password, fk_User, callback) => {
  const query = 'INSERT INTO Authentication (admision_date, session_time, password, fk_User) VALUES (?, ?, ?, ?)';
  db.query(query, [admision_date, session_time, password, fk_User], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Authentications
const getAllAuthentications = (callback) => {
  const query = 'SELECT * FROM Authentications';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get a Authentication by ID
const getAuthenticationById = (idAuthentication, callback) => {
  const query = 'SELECT * FROM Authentication WHERE idAuthentication = ?';
  db.query(query, [idAuthentication], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update a Authentication
const updateAuthentication = (idAuthentication, admision_date, session_time, password, fk_User, callback) => {
  const query = 'UPDATE Authentication SET admision_date = ?, session_time = ?, password = ?, fk_User = ? WHERE idAuthentication = ?';
  db.query(query, [admision_date, session_time, password, fk_User, idAuthentication], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete a Authentication
const deleteAuthentication = (idAuthentication, callback) => {
  const query = 'DELETE FROM Authentication WHERE idAuthentication = ?';
  db.query(query, [idAuthentication], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createAuthentication,
  getAllAuthentications,
  getAuthenticationById,
  updateAuthentication,
  deleteAuthentication
};