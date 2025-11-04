const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// GET /api/productos  -> lista todos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/productos  -> crear (para poblar)
router.post('/', async (req, res) => {
  try {
    const p = new Producto(req.body);
    await p.save();
    res.json(p);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
