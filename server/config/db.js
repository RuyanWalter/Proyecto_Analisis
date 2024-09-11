const sql = require('mssql');

// Configuración de conexión para SQL Server
const dbConfig = {
    user: 'sa',   // Usuario de SQL Server
    password: 'admin123',  // Contraseña de SQL Server
    server: 'WALTERRUYAN\\SQLEXPRESS',  // Nombre del servidor
    database: 'tienda',
    options: {
        encrypt: false,  // Si no usas Azure, debe estar en false
        enableArithAbort: true,
        connectTimeout: 30000  // Aumentar el tiempo de espera a 30 segundos (30000 milisegundos)
    }
};

// Conexión a la base de datos
const connectDB = async () => {
    try {
        await sql.connect(dbConfig);
        console.log('Conectado a la base de datos SQL Server');
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
};

module.exports = { sql, connectDB };
