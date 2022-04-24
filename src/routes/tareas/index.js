const { Router } = require("express");
const tareaCtrl = require("../../controllers/tareaController");

const router = Router();

router.get("/", tareaCtrl.listarTareas);

module.exports = router;
