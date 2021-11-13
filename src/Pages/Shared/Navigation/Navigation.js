import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';




const Navigation = () => {
    const {user, logOut} = useAuth();

    return (
       <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
    <a class="navbar-brand fs-2 text-white m-3" href="/home">Wedding Ring</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#blogs">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#contact">Contact</a>
        </li>
       
      </ul>
      { user?.email?
                <div>
                  
                  <Link to="/dashboard" style={{ textDecoration: 'none', marginRight:'5px' }}> <button class="btn btn-outline-info text-white">Dashboard</button></Link>
                  <button onClick={logOut} class="btn btn-outline-info text-white">Logout Now</button>
                </div>
              
              
 :
 <NavLink to="/login" style={{ textDecoration: 'none' }}> <button class="btn btn-outline-info text-white">Login</button>
 </NavLink>}
    </div>
  </div>
</nav>
<nav class="navbar navbar-light bg-light mb-5">
  <div class="container-fluid">
  <button class="btn btn-success text-white mb-3">Buy Now</button>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search Your Ring" aria-label="Search"/>
      <button class="btn btn-success" type="submit">Search</button>
    </form>
  </div>
</nav>
       </div>
    );
};

export default Navigation;