const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/authMiddleware');
const {
  crearColor,
  obtenerColores,
  obtenerColorPorId,
  actualizarColor,
  eliminarColor,
} = require('../controllers/colorController');

// Rutas públicas
router.get('/', obtenerColores);        // Listar colores
router.get('/:id', obtenerColorPorId);  // Obtener color por ID

// Rutas protegidas (requieren token)
router.post('/', verificarToken, crearColor);           // Crear color
router.put('/:id', verificarToken, actualizarColor);    // Actualizar color
router.delete('/:id', verificarToken, eliminarColor);   // Eliminar color

module.exports = router;