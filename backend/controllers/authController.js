const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Administrador = require('../models/administrador');

// Login de administrador
const loginAdministrador = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar que las credenciales estén completas
    if (!email || !password) {
      return res.status(400).json({ error: 'Email y password son requeridos' });
    }

    // Buscar administrador por email
    const admin = await Administrador.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Verificar contraseña
    const esValido = await bcrypt.compare(password, admin.password);
    if (!esValido) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Crear token con la clave secreta del .env
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET no está definido en el archivo .env');
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({
      mensaje: 'Login exitoso',
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { loginAdministrador };