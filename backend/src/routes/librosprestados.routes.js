// routes/prestamosActivos.routes.js
const express = require("express");
const router = express.Router();
const { getPrestamosActuales } = require("../controllers/librosprestados.controller");

router.get("/prestamos-actuales", getPrestamosActuales);

module.exports = router;
