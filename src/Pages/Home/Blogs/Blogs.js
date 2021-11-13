import React from 'react';

const Blogs = () => {
    return (
       <div className="bg-success">
           <h3 className="text-white pt-5" id="blogs">Our Latest Blogs</h3>

            <div className="d-flex">
            {/* Slider one */}
            <div id="carouselExampleDark" class="carousel carousel-dark slide w-50 m-5" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://i.ibb.co/tc584Yq/blog-1.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Discount on Fall Season</h1>
        <p>Look who just found her dream ring.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.ibb.co/Xpz5G1P/blog-2.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Your confidence booster</h1>
        <p>A symbol of love, commitment and forever</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* Slider two */}
<div id="carouselExampleDark" class="carousel carousel-dark slide w-50 m-5" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://i.ibb.co/JRcsNVr/blog-3.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Customized Diamonds</h1>
        <p>We know you want something different.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.ibb.co/BNqLssx/blog-4.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Like dream comes true</h1>
        <p>Wedding of granddaughter of Rasp</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
       </div>
    );
};

export default Blogs;