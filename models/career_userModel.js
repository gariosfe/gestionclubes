const db = require('../conexion/conexion');

// Function to create a new Career User
const createCareer_User = (fk_Career, fk_User, callback) => {
  const query = 'INSERT INTO Career_User(fk_Career, fk_User) VALUES (?, ?)';
  db.query(query, [fk_Career, fk_User], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Career_Users
const getAllCareer_Users = (callback) => {
  const query = 'SELECT * FROM Career_Users';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Career_User by ID
const getCareer_UserById = (idCareer_User, callback) => {
  const query = 'SELECT * FROM Career_User WHERE idCareer_User = ?';
  db.query(query, [idCareer_User], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Career_User
const updateCareer_User = (idCareer_User, fk_Career, fk_User, callback) => {
  const query = 'UPDATE Career_User SET fk_Career = ?, fk_Career = ? WHERE idCareer_User = ?';
  db.query(query, [fk_Career, fk_User, idCareer_User], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Career_User
const deleteCareer_User = (idCareer_User, callback) => {
  const query = 'DELETE FROM Career_User WHERE idCareer_User = ?';
  db.query(query, [idCareer_User], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createCareer_User,
  getAllCareer_Users,
  getCareer_UserById,
  updateCareer_User,
  deleteCareer_User
};