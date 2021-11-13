import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);


    const handleDelete = id =>{
        const url= `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Deleted');
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining)
            }
        })
    }

    return (
        <div>
        <h1 className="text-success mt-2">Manage Products</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4 m-1">
  
  {
  products.map(product => <table class="table table-bordered border-primary w-75 mx-auto">
      <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">Ring</th>
      <th scope="col">Price</th>
      <th scope="col">Shipment</th>
      <th scope="col">Control</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{product._id}</th>
      <td>{product.name}</td>
      <td>$ {product.price}</td>
      <td>{product.status}</td> 
      <td><button class="btn btn-danger text-white" onClick={()=> handleDelete(product._id)}>Delete</button></td> 
    </tr>
  </tbody>
</table>)
  }
  
  </div>
      </div>
    );
};

export default ManageProducts;