const Material = require('../models/material');

// Crear nuevo material
const crearMaterial = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoMaterial = await Material.create({ nombre });
    res.status(201).json(nuevoMaterial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los materiales
const obtenerMateriales = async (req, res) => {
  try {
    const materiales = await Material.findAll();
    res.json(materiales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener material por ID
const obtenerMaterialPorId = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (!material) return res.status(404).json({ mensaje: 'Material no encontrado' });
    res.json(material);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar material
const actualizarMaterial = async (req, res) => {
  try {
    const { nombre } = req.body;
    const material = await Material.findByPk(req.params.id);
    if (!material) return res.status(404).json({ mensaje: 'Material no encontrado' });

    material.nombre = nombre;
    await material.save();
    res.json(material);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar material
const eliminarMaterial = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (!material) return res.status(404).json({ mensaje: 'Material no encontrado' });

    await material.destroy();
    res.json({ mensaje: 'Material eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearMaterial,
  obtenerMateriales,
  obtenerMaterialPorId,
  actualizarMaterial,
  eliminarMaterial,
};