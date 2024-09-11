const { sql } = require('../config/db');

// Consulta para obtener todos los productos
exports.getAllProducts = async (callback) => {
  try {
    const result = await sql.query('SELECT * FROM products');
    callback(null, result.recordset); // recordset contiene los resultados
  } catch (err) {
    callback(err, null);
  }
};
