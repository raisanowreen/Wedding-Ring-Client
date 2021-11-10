import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router';
import { Typography, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';



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


    useEffect( () =>{
        fetch("/products.json")
        .then(res => res.json())
        .then(data => {
            const p = data.find(m => m.code == productId)
            setProduct(p)
        })
    }, [productId]);
    



    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
<Typography>{product.name}</Typography>        
</Grid>
        <Grid item xs={6}>
            <form>
            <TextField id="standard-basic" type="text" label={user.displayName} name="patientName" onBlur={handleOnBlur} variant="standard" /> <br />
            <TextField id="standard-basic" label={user.email} name="email" onBlur={handleOnBlur} variant="standard" /> <br />
            <TextField id="standard-basic" label="Product" name="product" onBlur={handleOnBlur} variant="standard" />  <br />
            <TextField id="standard-basic" label="Address" name="address" onBlur={handleOnBlur} variant="standard" /> <br />
            <TextField id="standard-basic" type="number" label="Contact" name="contact" onBlur={handleOnBlur} variant="standard" /> <br />
            <TextField id="standard-basic" type="number" label="Price" name={product.price} onBlur={handleOnBlur} variant="standard" /> <br />
            <Button variant="outlined">Order Now</Button>

            </form>
        </Grid>
      </Grid>
    );
};

export default Purchase;