const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Configuración de Sequelize con PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: process.env.DB_SSL === 'true'
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
    logging: true, // Logs SQL en consola
  }
);

// Función para verificar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a PostgreSQL exitosa con Sequelize');
  } catch (error) {
    console.error('Error al conectar con Sequelize:', error.message);
  }
}

module.exports = {
  sequelize,
  testConnection,
};