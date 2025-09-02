const app = require('./src/app');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola mundo!');
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

