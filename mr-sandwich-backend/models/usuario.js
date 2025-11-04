const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  telefono: { type: String },
  direccion: { type: String },
  rol: { type: String, default: 'usuario' } // puede ser 'admin' o 'usuario'
});

module.exports = mongoose.model('Usuario', usuarioSchema);
