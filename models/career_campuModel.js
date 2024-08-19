const db = require('../conexion/conexion');

// Function to create a new Career campus
const createCareer_campu = (fk_Career, fk_campus, callback) => {
  const query = 'INSERT INTO Career_campu (fk_Career, fk_campus) VALUES (?, ?)';
  db.query(query, [fk_Career, fk_campus], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Career_campus
const getAllCareer_campus = (callback) => {
  const query = 'SELECT * FROM Career_campus';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an Career campu by ID
const getCareer_campuById = (idCareer_campu, callback) => {
  const query = 'SELECT * FROM Career_campu WHERE idCareer_campu = ?';
  db.query(query, [idCareer_campu], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an Career campu
const updateCareer_campu = (idCareer_campu, fk_Career, fk_campus, callback) => {
  const query = 'UPDATE Career_campu SET fk_Career = ?, fk_campus = ? WHERE idCareer_campu = ?';
  db.query(query, [fk_Career, fk_campus, idCareer_campu], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an Career_campu
const deleteCareer_campu = (idCareer_campu, callback) => {
  const query = 'DELETE FROM Career_campu WHERE idCareer_campu = ?';
  db.query(query, [idCareer_campu], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createCareer_campu,
  getAllCareer_campus,
  getCareer_campuById,
  updateCareer_campu,
  deleteCareer_campu
};