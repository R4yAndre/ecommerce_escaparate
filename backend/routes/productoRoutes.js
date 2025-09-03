const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/authMiddleware');
const {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  patchProducto,
  eliminarProducto,
} = require('../controllers/productoController');

// Rutas públicas
router.get('/', obtenerProductos);          // Listar productos
router.get('/:id', obtenerProductoPorId);   // Obtener producto por ID

// Rutas protegidas
router.post('/', verificarToken, crearProducto);           // Crear producto
router.put('/:id', verificarToken, actualizarProducto);    // Actualizar producto completo
router.patch('/:id', verificarToken, patchProducto);       // Actualizar parcialmente producto
router.delete('/:id', verificarToken, eliminarProducto);   // Eliminar producto

module.exports = router;