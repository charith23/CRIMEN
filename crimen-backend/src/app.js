const express = require('express');
const caseRoutes = require('./routes/caseRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/api/cases', caseRoutes);
app.use(errorHandler);

module.exports = app;
