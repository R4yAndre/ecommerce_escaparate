const Producto = require('../models/producto');

// Crear nuevo producto
const crearProducto = async (req, res) => {
  try {
    const nuevo = await Producto.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener producto por ID
const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar producto
const actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });

    await producto.update(req.body);
    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar parcialmente producto
const patchProducto = async (req, res) => {
    try {
      const producto = await Producto.findByPk(req.params.id);
      if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
  
      await producto.update(req.body); // Solo actualiza los campos enviados
      res.json(producto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// Eliminar producto
const eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });

    await producto.destroy();
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  patchProducto,
  eliminarProducto,
};