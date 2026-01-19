const Case = require('../models/caseModel');

// Get all cases
exports.getAllCases = (req, res, next) => {
  Case.getAllCases((err, results) => {
    if (err) return next(err);
    res.json(results);
  });
};

// Get case by ID
exports.getCaseById = (req, res, next) => {
  Case.getCaseById(req.params.id, (err, results) => {
    if (err) return next(err);
    if (results.length === 0) return res.status(404).json({ message: 'Case not found' });
    res.json(results[0]);
  });
};

// Create a new case
exports.createCase = (req, res, next) => {
  Case.createCase(req.body, (err, result) => {
    if (err) return next(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

// Update case
exports.updateCase = (req, res, next) => {
  Case.updateCase(req.params.id, req.body, (err, result) => {
    if (err) return next(err);
    res.json({ message: 'Case updated' });
  });
};

// Delete case
exports.deleteCase = (req, res, next) => {
  Case.deleteCase(req.params.id, (err, result) => {
    if (err) return next(err);
    res.json({ message: 'Case deleted' });
  });
};
