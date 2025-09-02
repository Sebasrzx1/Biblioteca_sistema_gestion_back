
const db = require('../config/conexion_db');

// Obtener registros de detalle_prestamo
const getDetallePrestamo = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM detalle_prestamo");
    res.json(rows);
  } catch (err) {
    console.error("Error detalle_prestamo:", err);
    res.status(500).json({ error: "Error en detalle_prestamo", detalle: err.message });
  }
};

// Obtener registros de ejemplares
const getEjemplares = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM ejemplares");
    res.json(rows);
  } catch (err) {
    console.error("Error ejemplares:", err);
    res.status(500).json({ error: "Error en ejemplares", detalle: err.message });
  }
};

// Obtener registros de libros
const getLibros = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM libros");
    res.json(rows);
  } catch (err) {
    console.error("Error libros:", err);
    res.status(500).json({ error: "Error en libros", detalle: err.message });
  }
};

// Obtener registros de prestamo
const getPrestamos = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM prestamo");
    res.json(rows);
  } catch (err) {
    console.error("Error prestamo:", err);
    res.status(500).json({ error: "Error en prestamo", detalle: err.message });
  }
};

// Obtener registros de usuarios
const getUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (err) {
    console.error("Error usuarios:", err);
    res.status(500).json({ error: "Error en usuarios", detalle: err.message });
  }
};

module.exports = {
  getDetallePrestamo,
  getEjemplares,
  getLibros,
  getPrestamos,
  getUsuarios
};
