const Tareas = require("../models/Tareas");

exports.listarTareas = (req, res) => {
  res.json({ msg: "Desde Tareas!" });
};
