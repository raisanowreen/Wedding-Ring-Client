import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Product = (props) => {
    const {name, price, description, img} = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275,border: 0, boxShadow: 0, textAlign: 'center' }}>
        <CardMedia
    component="img"
 style= {{width: "auto", height:"80px", margin: "0 auto"}}
    image={img}
    alt="green iguana"
  />
  <CardContent>
    <Typography variant="h5" component="div">
    {name}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {description}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {price}
    </Typography>
    <Link to="/login"> <Button variant="outlined" sx={{color: 'text.secondary', fontWeight: 'bold',  fontSize: 'h6.fontSize'}}>Purchase</Button>
 </Link>
  </CardContent>
</Card>
        </Grid>
    );
};

export default Product;