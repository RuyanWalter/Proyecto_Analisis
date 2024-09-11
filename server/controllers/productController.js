const Product = require('../models/productModel');

exports.getProducts = (req, res) => {
Product.getAllProducts((err, products) => {
    if (err) {
    return res.status(500).json({ message: 'Error al obtener productos' });
    }
    res.json(products);
});
};
