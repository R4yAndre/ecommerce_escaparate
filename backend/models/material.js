const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/pg');

const Material = sequelize.define('Material', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'material',
  timestamps: false,
});

module.exports = Material;