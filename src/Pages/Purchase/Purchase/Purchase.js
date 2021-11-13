import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const Purchase = () => {
    const {user} = useAuth();
    const {productId} = useParams();
    const [product, setProduct] = useState({ });


// Single item url fetch
useEffect( () =>{
    fetch(`https://boiling-everglades-45743.herokuapp.com/products/${productId}`)
    .then(res => res.json())
    .then(data => setProduct(data))
}, [productId]);

// Order placment update
const { register, handleSubmit, reset } = useForm();

const onSubmit = data => {
    console.log(data)

    axios.post('https://boiling-everglades-45743.herokuapp.com/orders', data)
    .then(res =>{
        if(res.data.insertedId){
            alert('Order Placed Successfully');
            reset();
        }
    }
    )};


    return (
      <div className="bg-dark">
                    <h1 className="fs-3 text-success fw-bolder mb-3 pt-5">Fill Up The Form To Purchase</h1>

            <div class="row row-cols-1 row-cols-md-2 g-4 w-75 mx-auto">
        
        <div class="col mt-5 pt-5">
          <div class="card">
          <form className="shipping-form bg-success p-3" onSubmit={handleSubmit(onSubmit)}>
      
      <p><input className="p-2 rounded me-3 mb-2 w-50" defaultValue={user.displayName} {...register("name")} />
      <input className="p-2 rounded" defaultValue={user.email} {...register("email", { required: true })} /></p>
      <p><input className="px-2 py-2 rounded text-center" defaultValue="" placeholder="Ring name" {...register("ring", { required: true })} /></p>
      <input className="p-2 rounded me-3 mb-3" placeholder="Address" defaultValue="" {...register("address")} />
      <input className="p-2 rounded mb-2 me-3" placeholder="City" defaultValue="" {...register("city")} />
      <input className="p-2 rounded me-3 mb-2" placeholder="Phone number" defaultValue="" type="number" {...register("phone")} />
      <input className="p-2 rounded" defaultValue="Pending" {...register("status")} />
      <p><button type="submit" class="btn btn-outline-info m-4 text-white">Purchase Now</button></p>
      </form>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card h-100 bg-success">
            <img src={product.img} class="card-img-top pt-5 ps-5 pe-5 pb-2" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-white">{product.name}</h5>
              <p class="text-info">Price: $ {product.price}</p>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    );
};

export default Purchase;