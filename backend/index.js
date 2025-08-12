const express = require('express');
const app = express();
const { testConnection } = require('./config/pg');
const colorRoutes = require('./routes/colorRoutes');
const materialRoutes = require('./routes/materialRoutes');
const productoRoutes = require('./routes/productoRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocumentation = require('./swagger.json');

app.use(express.json());

// Rutas
app.use('/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));
app.use('/api/colores', colorRoutes);
app.use('/api/materiales', materialRoutes);
app.use('/api/productos', productoRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});