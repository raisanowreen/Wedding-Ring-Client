import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);


// show all orders

    useEffect(()=>{
        const url = 'https://boiling-everglades-45743.herokuapp.com/allOrders';
        fetch(url)
        .then(res => res.json())
        .then(data=> setAllOrders(data)
        );
    },[]); 

// delete any order
    const handleDelete = id =>{
        const url= `https://boiling-everglades-45743.herokuapp.com/allOrders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Deleted');
                const remaining = allOrders.filter(allOrder => allOrder._id !== id);
                setAllOrders(remaining)
            }
        })
    }

// update order status
    const [status, setStatus] = useState('')

    const handleStatus = (e) =>{
        setStatus(e.target.value)
    }

    const handleUpdate = (id) =>{
fetch(`https://boiling-everglades-45743.herokuapp.com/allOrders/${id}`,{
    method: 'PUT',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify({status})
})
.then(res=> res.json())
.then(data =>{
    alert('Product shipped')
    console.log(data)
})
    
    }
    return (
        <div>
        <h4 className="bg-success p-3">{allOrders.length} orders has been placed</h4>
        {allOrders.map(allOrders => <div className="table-responsive">  <table class="table text-dark">
        <thead>
<tr>
  <th scope="col">Order Id</th>
  <th scope="col">Customer</th>
  <th scope="col">Ring</th>
  <th scope="col">Price</th>
  <th scope="col">Shipment</th>
  <th scope="col">Approve</th>
  <th scope="col">Control</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">{allOrders._id}</th>
  <th scope="row">{allOrders.name}</th>
  <td>{allOrders.ring}</td>
  <td>$ {allOrders.price}</td>
  <td><input onChange={handleStatus} type="text" defaultValue={allOrders.status} /></td> 
  <td><button class="btn btn-outline-danger text-dark" onClick={()=> handleUpdate(allOrders._id)}>Update</button></td> 
  <td><button class="btn btn-outline-danger text-dark" onClick={()=> handleDelete(allOrders._id)}>Delete</button></td> 
</tr>
</tbody>
</table></div>)}


       
    </div>
    );
};

export default ManageOrders;