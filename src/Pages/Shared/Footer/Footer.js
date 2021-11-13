import React from 'react';

const Footer = () => {
    return (
        <div class="card text-white w-100">
  <img src="https://img.freepik.com/free-vector/green-curve-abstract-background_53876-99569.jpg?size=626&ext=jpg" class="card-img" alt="..." height="300px"/>
  <div class="card-img-overlay">
  <div>
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
  <label class="btn btn-info" for="btncheck1">Home</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
  <label class="btn btn-outline-info" for="btncheck2">Purchase</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
  <label class="btn btn-info" for="btncheck3">Blogs</label>
</div>
<p className="text-dark mt-3" id="contact"><i class="far fa-address-card"></i> Contact: 67850968</p>
  </div>
<h1 className="text-success mt-2 mb-5">Wedding Ring</h1>
<div className="d-flex justify-content-center text-success fs-1">
<i class="fab fa-facebook-messenger me-3"></i>
<i class="fas fa-at me-3"></i>
<i class="fab fa-instagram-square"></i>
</div>
<h6 className="text-dark mt-3"><i class="far fa-copyright text-dark"></i> All rights reserve to wedding ring</h6>
  </div>
</div>
    );
};

export default Footer;