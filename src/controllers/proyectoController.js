const Proyectos = require("../models/Proyectos");

exports.listarProyectos = (req, res) => {
  res.json({ msg: "Desde Proyectos!" });
};
