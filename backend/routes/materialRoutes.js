const express = require('express');
const router = express.Router();
const {
  crearMaterial,
  obtenerMateriales,
  obtenerMaterialPorId,
  actualizarMaterial,
  eliminarMaterial,
} = require('../controllers/materialController');

router.post('/', crearMaterial);
router.get('/', obtenerMateriales);
router.get('/:id', obtenerMaterialPorId);
router.put('/:id', actualizarMaterial);
router.delete('/:id', eliminarMaterial);

module.exports = router;