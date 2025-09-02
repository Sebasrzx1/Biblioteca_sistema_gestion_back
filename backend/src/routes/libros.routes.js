// routes/prestamo.routes.js
const express = require('express');
const router = express.Router();
const { getLibros } = require('../controllers/libros.controller');

// Ruta para consultar los libros disponibles por categoria
router.get('/disponibles', getLibros);

module.exports = router;
