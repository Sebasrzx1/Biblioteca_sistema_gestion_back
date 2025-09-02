// controllers/prestamo.controller.js
const db = require('../config/conexion_db'); // Ajusta la ruta según tu proyecto

// Obtener préstamos activos sin fecha de devolución real
const getLibros = async (req, res) => {
  try {
    const query = `
      SELECT l.categoria, l.titulo, e.id_ejemplar
      FROM libros l
      JOIN ejemplares e ON l.id_libro = e.id_libro
      WHERE e.estado = 'Disponible'
      ORDER BY l.categoria, l.titulo;
    `;
        const [rows] = await db.query(query);

        res.json(rows);
    } catch (err) {
        console.error('Error al obtener libros disponibles:', err);
        res.status(500).json({ error: 'Error en el servidor', detalle: err.message });
    }
};

module.exports = { getLibros };
