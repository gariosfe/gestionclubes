const db = require('../conexion/conexion');

// Function to create a user
const createUser = (name, email, cellphone, fk_campus, fk_club, callback) => {
  const query = 'INSERT INTO User (name, email, cellphone, fk_campus, fk_club) VALUES (?, ?, ?, ?. ?)';
  db.query(query, [name, email, cellphone, fk_campus, fk_club], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all users
const getAllUsers = (callback) => {
  const query = 'SELECT * FROM User';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get a user by ID
const getUserById = (idUser, callback) => {
  const query = 'SELECT * FROM User WHERE idUser = ?';
  db.query(query, [idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update a user
const updateUser = (idUser, name, email, cellphone, fk_campus, fk_club, callback) => {
  const query = 'UPDATE User SET name = ?, email = ?, cellphone = ?, fk_campus = ?, fk_club = ? WHERE idUser = ?';
  db.query(query, [name, email, cellphone, fk_campus, fk_club, idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete a user
const deleteUser = (idUser, callback) => {
  const query = 'DELETE FROM User WHERE idUser = ?';
  db.query(query, [idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};