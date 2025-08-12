const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/pg');
const Material = require('./material');
const Color = require('./color');
// const Categoria = require('./categoria'); // Si tienes el modelo

const Producto = sequelize.define('producto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
  },
  id_material: {
    type: DataTypes.INTEGER,
  },
  id_color: {
    type: DataTypes.INTEGER,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  precio: {
    type: DataTypes.NUMERIC(10, 2),
  },
  url_imagen: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'producto',
  timestamps: false,
  freezeTableName: true
});

// Asociaciones
// Producto.belongsTo(Material, {
//  foreignKey: 'id_material',
//  as: 'material',
// });

// Producto.belongsTo(Color, {
//  foreignKey: 'id_color',
//  as: 'color',
// });

// Producto.belongsTo(Categoria, {
//   foreignKey: 'id_categoria',
//   as: 'categoria',
// });

module.exports = Producto;