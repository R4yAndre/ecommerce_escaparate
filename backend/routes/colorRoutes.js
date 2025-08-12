const express = require('express');
const router = express.Router();
const {
  crearColor,
  obtenerColores,
  obtenerColorPorId,
  actualizarColor,
  eliminarColor,
} = require('../controllers/colorController');

router.post('/', crearColor);           // Crear color
router.get('/', obtenerColores);        // Listar colores
router.get('/:id', obtenerColorPorId);  // Obtener color por ID
router.put('/:id', actualizarColor);    // Actualizar color
router.delete('/:id', eliminarColor);   // Eliminar color

module.exports = router;