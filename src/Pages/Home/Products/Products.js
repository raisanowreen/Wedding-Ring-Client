import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <Box sx={{ flexGrow: 1 }}>
       <Typography variant="h6" component="div" sx={{mb:2, color: 'info.main'}}>
        Our Products
        </Typography>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
products.slice(0,6).map(product => <Product
key= {product.name}
product = {product}
></Product>)
          }
        </Grid>
      </Box>
    );
};

export default Products;