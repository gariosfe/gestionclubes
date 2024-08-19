const Categories = require('../models/categoryModel');

exports.createCategory = (req, res) => {
  const { name, fk_Categoy } = req.body;
  if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Name is required' });
  }
  if (fk_Categoy !== undefined && fk_Categoy !== null && isNaN(fk_Categoy)) {
      return res.status(400).json({ error: 'Invalid fk_Categoy' });
  }
  Categories.createCategory(name, fk_Categoy, (err, id) => {
      if (err) {
          console.error('Error creating category:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ id, name, fk_Categoy });
  });
};

// Obtener todas las categorías
exports.getAllCategories = (req, res) => {
    Categories.getAllCategories((err, categories) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(categories);
    });
};

// Obtener una categoría por ID
exports.getCategoryById = (req, res) => {
    const id = req.params.id; 
    Categories.getCategoryById(id, (err, category) => {
        if (err) return res.status(500).send(err);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(category);
    });
};

// Actualizar una categoría
exports.updateCategory = (req, res) => {
    const { id } = req.params;  // ID from URL parameters
    const { name } = req.body; // Name from request body
    
    Categories.updateCategory(id, name, (err, affectedRows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (affectedRows === 0) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json({ message: 'Category updated successfully' });
    });
};

// Eliminar una categoría
exports.deleteCategory = (req, res) => {
    const { id } = req.params;  
    Categories.deleteCategory(id, (err, affectedRows) => {
        if (err) return res.status(500).send(err);
        if (affectedRows === 0) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json({ message: 'Category deleted successfully' });  
    });
};