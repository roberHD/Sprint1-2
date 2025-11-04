const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

// POST /api/pedidos -> crear pedido
router.post('/', async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    await pedido.save();
    res.json({ mensaje: 'Pedido guardado', pedido });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/pedidos -> listar pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.find().sort({ fecha: -1 });
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
