// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const productosRoutes = require('./routes/productos');
const pedidosRoutes = require('./routes/pedidos');
const usuariosRoutes = require('./routes/usuarios');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// (opcional) servir carpeta public si quieres poner tu HTML en backend/public
app.use(express.static(path.join(__dirname, 'public')));

// rutas API
app.use('/api/productos', productosRoutes);
app.use('/api/pedidos', pedidosRoutes);
app.use('/api/usuarios', usuariosRoutes);
// conectar mongo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('🍃 Conectado a MongoDB');
  app.listen(PORT, () => console.log(`🚀 Server en http://localhost:${PORT}`));
})
.catch(err => {
  console.error('Error conectando a MongoDB:', err.message);
});
