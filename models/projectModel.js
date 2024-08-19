const db = require('../conexion/conexion');

// Function to create a new project
const createProject = (name, advance_idadvance, fk_club, callback) => {
  const query = 'INSERT INTO Project (name, advance_idadvance, fk_club) VALUES (?, ?, ?)';
  db.query(query, [name, advance_idadvance, fk_club], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Projects
const getAllProjects = (callback) => {
  const query = 'SELECT * FROM Projects';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Project by ID
const getProjectById = (idProject, callback) => {
  const query = 'SELECT * FROM Project WHERE idProject = ?';
  db.query(query, [idProject], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Project
const updateProject = (idProject, name, advance_idadvance, fk_club, callback) => {
  const query = 'UPDATE Project SET name = ?, advance_idadvance = ?, fk_club = ? WHERE idProject = ?';
  db.query(query, [name, advance_idadvance, fk_club, idProject], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Project
const deleteProject = (idProject, callback) => {
  const query = 'DELETE FROM Project WHERE idProject = ?';
  db.query(query, [idProject], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
};