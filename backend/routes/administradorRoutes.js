const express = require('express');
const router = express.Router();
const { crearAdministrador } = require('../controllers/administradorController');

router.post('/', crearAdministrador);  // Crear administrador

module.exports = router;