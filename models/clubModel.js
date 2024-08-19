const db = require('../conexion/conexion');

// Function to create a new club
const createClub = (name, descripcion, fk_Categoy, fk_Policy, fk_resource, callback) => {
  const query = 'INSERT INTO Club (name, descripcion, fk_Categoy, fk_Policy, fk_resource) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, descripcion, fk_Categoy, fk_Policy, fk_resource], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all clubs
const getAllClubs = (callback) => {
  const query = 'SELECT * FROM Clubs';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an blub by ID
const getClubById = (idClub, callback) => {
  const query = 'SELECT * FROM Club WHERE idClub = ?';
  db.query(query, [idClub], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an club
const updateClub = (idClub, name, descripcion, fk_Categoy, fk_Policy, fk_resource, callback) => {
  const query = 'UPDATE Club SET name = ?, descripcion = ?, fk_Categoy = ?, fk_Policy, fk_resource = ? WHERE idClub = ?';
  db.query(query, [name, descripcion, fk_Categoy, fk_Policy, fk_resource, idClub], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an club
const deleteClub = (idClub, callback) => {
  const query = 'DELETE FROM Club WHERE idClub = ?';
  db.query(query, [idClub], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createClub,
  getAllClubs,
  getClubById,
  updateClub,
    
};