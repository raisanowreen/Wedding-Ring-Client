import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);
    return (
        <Box sx={{ flexGrow: 1 }}>
       <Typography variant="h6" component="div" sx={{mb:2, color: 'info.main'}}>
        Clients'Reviews
        </Typography>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
reviews.slice(0,6).map(review => <h1>{review.name}</h1>)
          }
        </Grid>
      </Box>
    );
};

export default Reviews;