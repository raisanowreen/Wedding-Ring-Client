import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);


    // Showing users their orders
    useEffect(()=>{
        const url = `https://boiling-everglades-45743.herokuapp.com/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setOrders(data)
        );
    },[user]); 

// Deleting any orders by users
    const handleDelete = id =>{
      const url= `https://boiling-everglades-45743.herokuapp.com/allOrders/${id}`
      fetch(url, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data);
          if(data.deletedCount){
              alert('Do you want to delete the order?');
              const remaining = orders.filter(order => order._id !== id);
              setOrders(remaining)
          }
      })
  }

    return (
        <div>
            <h4 className="bg-success p-3">{orders.length} orders has been placed</h4>
            {orders.map(order =>  <div className="table-responsive"><table class="table text-dark">
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
      <th scope="row">{order._id}</th>
      <td>{order.ring}</td>
      <td>$ {order.price}</td>
      <td>{order.status}</td> 
      <td><button class="btn btn-danger text-white" onClick={()=> handleDelete(order._id)}>Delete</button></td> 
    </tr>
  </tbody>
</table></div>)}


           
        </div>
    );
};

export default MyOrders;