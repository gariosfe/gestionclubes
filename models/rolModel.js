const db = require('../conexion/conexion');

// Función para crear un rol 
const createRol = (fk_User, fk_Categoy, callback) => {
  const query = 'INSERT INTO Rol (fk_User, fk_Categoy) VALUES (?, ?)';
  db.query(query, [fk_User, fk_Categoy], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Función para obtener todas los roles
const getAllRols = (callback) => {
  const query = 'SELECT * FROM Rols';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener un rol por ID
const getRolById = (idRol, callback) => {
  const query = 'SELECT * FROM Rol WHERE idRol = ?';
  db.query(query, [idRol], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Función para actualizar un rol
const updateRol = (idRol, fk_User, fk_Categoy, callback) => {
  const query = 'UPDATE Rol SET fk_User = ?, fk_Categoy = ? WHERE idRol = ?';
  db.query(query, [fk_User, fk_Categoy, idRol], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Función para eliminar un rol
const deleteRol = (idRol, callback) => {
  const query = 'DELETE FROM Rol WHERE idRol = ?';
  db.query(query, [idRol], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createRol,
  getAllRols,
  getRolById,
  updateRol,
  deleteRol
};