// Model: CRUD SQL queries for "cases" table
const db = require('../config/db');

exports.getAllCases = (callback) => {
  db.query('SELECT * FROM cases', callback);
};

exports.getCaseById = (id, callback) => {
  db.query('SELECT * FROM cases WHERE id = ?', [id], callback);
};

exports.createCase = (data, callback) => {
  db.query('INSERT INTO cases SET ?', data, callback);
};

exports.updateCase = (id, data, callback) => {
  db.query('UPDATE cases SET ? WHERE id = ?', [data, id], callback);
};

exports.deleteCase = (id, callback) => {
  db.query('DELETE FROM cases WHERE id = ?', [id], callback);
};
