const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/pg');

const Administrador = sequelize.define('Administrador', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true, 
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
}, {
  tableName: 'administrador',
  timestamps: false,
});

module.exports = Administrador;