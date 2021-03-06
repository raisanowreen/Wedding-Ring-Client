import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';



const ExploreProducts = () => {
    const [products, setProducts] = useState([])

    // fetching all data from database
    useEffect(() =>{
        fetch('https://boiling-everglades-45743.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
         <div>
      <h1 className="text-success mt-2">Our Rings</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 m-1">

{
products.map(product => <Product
key= {product.name}
product = {product}
></Product>)
}

</div>
    </div>
      
    );
};

export default ExploreProducts;