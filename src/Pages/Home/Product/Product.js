import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Product = (props) => {
    const {name, price, details, img, _id} = props.product;
    return (
      <div class="col">
      <div class="card h-100 bg-success">
       
        <div class="card-body">
          <h5 class="card-title text-white">    {name}
  </h5>
          <h5 class="card-title">    Price: $ {price}
  
  </h5>
          <p class="card-text">      {details}
  </p>
        
        </div>
        <img src={img} class="card-img-top" alt="..."/>
        <Link to={`/purchase/${_id}`}> <Button class="btn btn-success text-white">Purchase</Button>
   </Link>
        </div>
      </div>

    );
};

export default Product;