const express = require('express');
const router = express.Router();
const { loginAdministrador } = require('../controllers/authController');

router.post('/login', loginAdministrador);

module.exports = router;