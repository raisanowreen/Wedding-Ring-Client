import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('https://boiling-everglades-45743.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);


    const handleDelete = id =>{
        const url= `https://boiling-everglades-45743.herokuapp.com/products/${id}`
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
  products.map(product => <div className="w-100"><div className="table-responsive"><table class="table">
  <thead>
<tr>
  <th scope="col">Product Id</th>
  <th scope="col">Ring</th>
  <th scope="col">Price</th>
  <th scope="col">Control</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">{product._id}</th>
  <td>{product.name}</td>
  <td>$ {product.price}</td>
  <td><button class="btn btn-danger text-white" onClick={()=> handleDelete(product._id)}>Delete</button></td> 
</tr>
</tbody>
</table></div></div>)
  }
  
  </div>
      </div>
    );
};

export default ManageProducts;