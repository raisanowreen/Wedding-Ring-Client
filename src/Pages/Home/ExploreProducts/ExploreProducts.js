import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';



const ExploreProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ textAlign: 'center'}}>
        <Typography variant="h6" component="div" sx={{mb:2, color: 'info.main'}}>
         Our Products
         </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {
 products.map(product => <Product
 key= {product.name}
 product = {product}
 ></Product>)
           }
         </Grid>
        </Container>
       </Box>
    );
};

export default ExploreProducts;