// routes/prestamo.routes.js
const express = require('express');
const router = express.Router();
const { getPrestamosActivos } = require('../controllers/prestamo.controller');

// Ruta para consultar los préstamos activos
router.get('/activos', getPrestamosActivos);

module.exports = router;
