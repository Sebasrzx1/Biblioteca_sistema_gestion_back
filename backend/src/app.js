const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Rutas
app.use('/api/prestamo', require('./routes/prestamo.routes.js'));
app.use('/api/libros', require('./routes/libros.routes.js'));
app.use('/api/biblioteca', require('./routes/biblioteca.routes.js'));
app.use("/api/librosprestados", require('./routes/librosprestados.routes.js'));
module.exports = app;
