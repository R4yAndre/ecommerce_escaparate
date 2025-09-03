const express = require('express'); 
const router = express.Router();
const verificarToken = require('../middlewares/authMiddleware');
const {
  crearMaterial,
  obtenerMateriales,
  obtenerMaterialPorId,
  actualizarMaterial,
  eliminarMaterial,
} = require('../controllers/materialController');

// Rutas públicas
router.get('/', obtenerMateriales);         // Listar materiales
router.get('/:id', obtenerMaterialPorId);   // Obtener material por ID

// Rutas protegidas
router.post('/', verificarToken, crearMaterial);           // Crear material
router.put('/:id', verificarToken, actualizarMaterial);    // Actualizar material
router.delete('/:id', verificarToken, eliminarMaterial);   // Eliminar material

module.exports = router;