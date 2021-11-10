import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div>
      <img src="https://i.ibb.co/CMwwBNN/hush-naidoo-jade-photography-yo01-Z-9-HQAw-unsplash.jpg" className="d-block w-100" alt="..." height="300px" width="200px"/>
      <img src="https://i.ibb.co/GMyKqN9/clay-banks-c-Ez-MOp5-Ft-V4-unsplash.jpg" className="d-block w-100" alt="..." height="300px"/>
      <img src="https://i.ibb.co/fQP543f/national-cancer-institute-1c8sj2-IO2-I4-unsplash.jpg" className="d-block w-100" alt="..." height="300px"/>
      <img src="https://i.ibb.co/jLKdQRd/samuel-ramos-RXVfrh-Csw-CQ-unsplash.jpg" className="d-block w-100" alt="..." height="300px"/>
      <div className="carousel-caption d-none d-md-block text-white fw-bold">
                <Link to="/exploreProducts"><button varient="contained">Explore</button></Link>
      </div>
    </div>
     </div>
</div>
        </div>
    );
};

export default Banner;