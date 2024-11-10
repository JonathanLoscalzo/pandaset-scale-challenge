/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const cors = require('cors');

const app = express();
const port = 4001;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));
app.use(cors({ origin: 'http://localhost:1234' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
// Endpoint para acceder a los archivos de la carpeta "frames"
app.get('/frames', (req, res) => {
  res.send('Archivos de frames disponibles');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
