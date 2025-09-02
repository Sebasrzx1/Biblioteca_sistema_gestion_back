// routes/general.routes.js
const express = require('express');
const router = express.Router();
const {
  getDetallePrestamo,
  getEjemplares,
  getLibros,
  getPrestamos,
  getUsuarios
} = require('../controllers/biblioteca.controller');

// Definimos las rutas
router.get('/detalle_prestamo', getDetallePrestamo);
router.get('/ejemplares', getEjemplares);
router.get('/libros', getLibros);
router.get('/prestamos', getPrestamos);
router.get('/usuarios', getUsuarios);

module.exports = router;
