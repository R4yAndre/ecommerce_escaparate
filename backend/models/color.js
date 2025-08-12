const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/pg');

const Color = sequelize.define('Color', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'color',
  timestamps: false,
});

module.exports = Color;