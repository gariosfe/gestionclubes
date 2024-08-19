const db = require('../conexion/conexion');

const createCategory = (name, fk_Categoy, callback) => {
  // Use default value for fk_Categoy if it is null or undefined
  const query = 'INSERT INTO Category (name, fk_Categoy) VALUES (?, ?)';
  db.query(query, [name, fk_Categoy || null], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.insertId);
  });
};


// Función para obtener todas las categorías
const getAllCategories = (callback) => {
  const query = 'SELECT * FROM Categories';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener una categoría por ID
const getCategoryById = (idCategory, callback) => {
  const query = 'SELECT * FROM Category WHERE idCategory = ?';
  db.query(query, [idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};


// Función para actualizar una categoría
const updateCategory = (idCategory, name, callback) => {
  const query = 'UPDATE Category SET name = ? WHERE idCategory = ?';
  db.query(query, [name, idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};



// Función para eliminar una categoría
const deleteCategory = (idCategory, callback) => {
  const query = 'DELETE FROM Category WHERE idCategory = ?';
  db.query(query, [idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};