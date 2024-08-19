const Projects = require('../models/projectModel');

// Create a Project
exports.createProject = (req, res) => {
  const { name, advance_idadvance, fk_club } = req.body;
  Projects.createProject(name, advance_idadvance, fk_club, fk_club, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, name, advance_idadvance, fk_club });
  });
};

// Get all Projects
exports.getAllProjects = (req, res) => {
    Projects.getAllProjects((err, projects) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(projects);
  });
};

// Get a Project by ID
exports.getProjectById = (req, res) => {
  const { id } = req.params;
  Projects.getProjectById(id, (err, project) => {
    if (err) return res.status(500).send(err);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  });
};

// Update a Project
exports.updateProject = (req, res) => {
  const { id } = req.params;
  const { name, advance_idadvance, fk_clu } = req.body;
  Projects.updateProject(id, name, advance_idadvance, fk_clu, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project updated successfully' });
  });
};

// Delete a Project
exports.deleteProject = (req, res) => {
  const { id } = req.params;
  Projects.deleteProject(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  });
};