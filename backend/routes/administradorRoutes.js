const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/authMiddleware');
const { crearAdministrador } = require('../controllers/administradorController');

// Proteger la creación de administradores
router.post('/', verificarToken, crearAdministrador);

module.exports = router;