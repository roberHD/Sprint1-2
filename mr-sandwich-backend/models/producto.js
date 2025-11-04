const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String },
  imagen: { type: String } // ruta relativa o URL
});

module.exports = mongoose.model('Producto', productoSchema);
