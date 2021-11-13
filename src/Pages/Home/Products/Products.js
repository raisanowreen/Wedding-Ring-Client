import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    // showing six products from database
    useEffect(() =>{
        fetch('https://boiling-everglades-45743.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
      <div className="w-100">
      <h3 className="text-success mt-5">Our Latest Rings</h3>
    <div class="row row-cols-1 row-cols-md-6 gy-2 gx-1 mb-5 w-100">

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