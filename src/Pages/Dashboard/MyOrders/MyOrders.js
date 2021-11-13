import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setOrders(data)
        );
    },[user]); 

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
      <td><button class="btn btn-outline-danger text-white">Delete</button></td> 
    </tr>
  </tbody>
</table></div>)}


           
        </div>
    );
};

export default MyOrders;