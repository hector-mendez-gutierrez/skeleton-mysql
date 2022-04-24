const { Router } = require("express");
const proyectoCtr = require("../../controllers/proyectoController");

const router = Router();

router.get("/", proyectoCtr.listarProyectos);

module.exports = router;
