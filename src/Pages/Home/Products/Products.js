import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
      <div>
      <h1 className="text-success mt-2">Our Rings</h1>
    <div class="row row-cols-1 row-cols-md-6 g-4 m-1">

{
products.slice(0,6).map(product => <Product
key= {product.name}
product = {product}
></Product>)
}

</div>
    </div>
    );
};

export default Products;