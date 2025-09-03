const express = require('express');
const cors = require('cors');
const { testConnection } = require('./config/pg');
const colorRoutes = require('./routes/colorRoutes');
const materialRoutes = require('./routes/materialRoutes');
const productoRoutes = require('./routes/productoRoutes');
const administradorRoutes = require('./routes/administradorRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocumentation = require('./swagger.json');

const app = express();

// Middlewares
app.use(cors());
// app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

// Rutas
app.use('/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));
app.use('/api/colores', colorRoutes);
app.use('/api/materiales', materialRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/administradores', administradorRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});