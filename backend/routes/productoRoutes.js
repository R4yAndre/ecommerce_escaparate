const express = require('express');
const router = express.Router();
const {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  patchProducto,
  eliminarProducto,
} = require('../controllers/productoController');

router.post('/', crearProducto);
router.get('/', obtenerProductos);
router.get('/:id', obtenerProductoPorId);
router.put('/:id', actualizarProducto);
router.patch('/:id', patchProducto);
router.delete('/:id', eliminarProducto);

module.exports = router;