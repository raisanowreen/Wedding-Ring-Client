import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>

<div class="card bg-white text-white">
  <img src="https://i.ibb.co/JKnYRPq/hhhhh-1.png" class="card-img" alt="..."/>
  <div class="card-img-overlay d-flex justify-content-center align-items-center">
   <div> 
   <h5 class="card-title fs-1 fw-bold text-white mb-5">Choose Your Dream Ring</h5>
    <Link to="/exploreProducts"><button class="btn btn-success text-white px-4 fs-4">Explore</button></Link>
   </div>
  </div>
</div>
        </div>
    );
};

export default Banner;