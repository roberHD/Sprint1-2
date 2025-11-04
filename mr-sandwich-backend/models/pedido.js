const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  cantidad: Number
}, { _id: false });

const pedidoSchema = new mongoose.Schema({
  productos: [itemSchema],
  total: Number,
  metodoEntrega: String,
  direccion: String,
  medioPago: String,
  fecha: { type: Date, default: Date.now },
  estado: { type: String, default: 'Pendiente' }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
