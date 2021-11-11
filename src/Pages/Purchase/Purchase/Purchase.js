import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router';
import { Typography, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const Purchase = () => {
    const {user} = useAuth();
    const {productId} = useParams();
    const [product, setProduct] = useState({ });
    const initialInfo = {userName:user.displayName, email: user.email, phone:'' }
const [orderInfo, setOrderInfo] = useState(initialInfo);

const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...orderInfo};
    newInfo[field] = value;
    console.log(newInfo);
   setOrderInfo(newInfo);
}

// Single item url fetch
useEffect( () =>{
    fetch(`http://localhost:5000/products/${productId}`)
    .then(res => res.json())
    .then(data => setProduct(data))
}, [productId]);

// Order placment update
const { register, handleSubmit, reset } = useForm();

const onSubmit = data => {
    console.log(data)

    axios.post('http://localhost:5000/orders', data)
    .then(res =>{
        if(res.data.insertedId){
            alert('Order Placed Successfully');
            reset();
        }
    }
    )};


    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
<Typography>{product.name}</Typography>        
</Grid>
        <Grid item xs={6}>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<p><input className="p-2 rounded me-3 mb-2" defaultValue={user.displayName} {...register("name")} />
<input className="p-2 rounded" defaultValue={user.email} {...register("email", { required: true })} /></p>
<p><input className="px-2 py-2 rounded text-center" defaultValue="" placeholder="food type" {...register("food", { required: true })} /></p>
<input className="p-2 rounded me-3 mb-3" placeholder="Address" defaultValue="" {...register("address")} />
<input className="p-2 rounded mb-2" placeholder="City" defaultValue="" {...register("city")} />
<input className="p-2 rounded me-3 mb-2" placeholder="phone number" defaultValue="" type="number" {...register("phone")} />
<input className="p-2 rounded" defaultValue="Pending" {...register("status")} />
<p><input className="mt-3 p-2 rounded bg-warning" type="submit" value="Purchase Food Option" /></p>
</form>
        </Grid>
      </Grid>
    );
};

export default Purchase;