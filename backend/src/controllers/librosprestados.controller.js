// controllers/prestamosActivos.controller.js
const db = require('../config/conexion_db');

// Obtener préstamos activos (libros no devueltos aún)
const getPrestamosActuales = async (req, res) => {
  try {
    const query = `
      SELECT DISTINCT l.titulo, e.id_ejemplar, u.nombre, u.apellido
      FROM libros l
      JOIN ejemplares e ON l.id_libro = e.id_libro
      JOIN detalle_prestamo dp ON e.id_ejemplar = dp.id_ejemplar
      JOIN prestamo p ON dp.id_prestamo = p.id_prestamo
      JOIN usuarios u ON p.id_usuario = u.id_usuario
      WHERE p.fecha_devolucion_real IS NULL;
    `;

    const [rows] = await db.query(query);
    res.json(rows);
  } catch (err) {
    console.error("Error al obtener préstamos activos:", err);
    res.status(500).json({ error: "Error en el servidor", detalle: err.message });
  }
};

module.exports = { getPrestamosActuales };
