const Color = require('../models/color');

// Crear un nuevo color
const crearColor = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoColor = await Color.create({ nombre });
    res.status(201).json(nuevoColor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los colores
const obtenerColores = async (req, res) => {
  try {
    const colores = await Color.findAll();
    res.json(colores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un color por ID
const obtenerColorPorId = async (req, res) => {
  try {
    const color = await Color.findByPk(req.params.id);
    if (!color) return res.status(404).json({ mensaje: 'Color no encontrado' });
    res.json(color);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un color
const actualizarColor = async (req, res) => {
  try {
    const { nombre } = req.body;
    const color = await Color.findByPk(req.params.id);
    if (!color) return res.status(404).json({ mensaje: 'Color no encontrado' });

    color.nombre = nombre;
    await color.save();
    res.json(color);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un color
const eliminarColor = async (req, res) => {
  try {
    const color = await Color.findByPk(req.params.id);
    if (!color) return res.status(404).json({ mensaje: 'Color no encontrado' });

    await color.destroy();
    res.json({ mensaje: 'Color eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearColor,
  obtenerColores,
  obtenerColorPorId,
  actualizarColor,
  eliminarColor,
};