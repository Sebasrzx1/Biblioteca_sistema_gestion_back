// controllers/prestamo.controller.js
const db = require('../config/conexion_db'); // Ajusta la ruta según tu proyecto

// Obtener préstamos activos sin fecha de devolución real
const getPrestamosActivos = async (req, res) => {
  try {
    const query = `
      SELECT p.id_prestamo, u.nombre, u.apellido, l.titulo, p.fecha_prestamo, p.fecha_devolucion_prevista
      FROM prestamo p
      JOIN usuarios u ON p.id_usuario = u.id_usuario
      JOIN detalle_prestamo dp ON p.id_prestamo = dp.id_prestamo
      JOIN ejemplares e ON dp.id_ejemplar = e.id_ejemplar
      JOIN libros l ON e.id_libro = l.id_libro
      WHERE p.fecha_devolucion_real IS NULL;
    `;
    const [rows] = await db.query(query);

    res.json(rows);
  } catch (err) {
  console.error('Error al obtener préstamos activos:', err);
  res.status(500).json({ error: 'Error en el servidor', detalle: err.message });
}
};

module.exports = { getPrestamosActivos };
