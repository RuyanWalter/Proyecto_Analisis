import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

const ProductList = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts().then(response => setProducts(response.data));
}, []);

return (
    <div>
    <h1>Lista de Productos</h1>
    <ul>
        {products.map(product => (
        <li key={product.id}>{product.name} - {product.price}</li>
        ))}
    </ul>
    </div>
);
};

export default ProductList;
