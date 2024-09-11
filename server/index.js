const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const productRoutes = require('./routes/productRoutes'); // Verifica que esta ruta sea correcta

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
connectDB();

// Rutas
app.use('/api', productRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});
