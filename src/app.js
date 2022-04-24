const express = require("express");

const app = express();

//Settings

app.use(express.json());

//Midleware

//Rutas
app.use('/api/proyectos', require('./routes/proyectos'))
app.use('/api/tareas', require('./routes/tareas'))

module.exports = app;
