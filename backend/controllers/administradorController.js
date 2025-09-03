const bcrypt = require('bcrypt');
const Administrador = require('../models/administrador');

// Crear un nuevo administrador
const crearAdministrador = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Verificar que todos los campos estén presentes
    if (!nombre || !email || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear administrador
    const nuevoAdmin = await Administrador.create({
      nombre,
      email,
      password: hashedPassword,
    });

    // Se evita retornar el hash al cliente
    const { password: _, ...adminSinPassword } = nuevoAdmin.toJSON();

    res.status(201).json(adminSinPassword);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  crearAdministrador,
};