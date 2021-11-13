import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useHistory,
    useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
const {loginUser} = useAuth();
const [loginData, setLoginData] = useState({});
const location = useLocation();
const history = useHistory();

const handleOnChange = e =>{
const field = e.target.name;
const value = e.target.value;
const newLoginData = {...loginData};
newLoginData[field] = value;
setLoginData(newLoginData);
console.log(field, value);
}


    const handleLoginSubmit = e =>{
        alert("Logged in Successfully")
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }
  
    return (
           <div>
             <Navigation></Navigation>
             <br />
      <div class="card bg-dark text-white mt-5 pt-5">
          <img src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img" alt="..."/>
          <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <form onSubmit={handleLoginSubmit} className="bg-info p-5">
<h3 className="text-success mb-3">Login Please</h3>            <TextField
          id="filled-search"
          label="Your Email"
          name="email"
          onChange={handleOnChange}
          type="text"
          variant="filled"
        />
        <br />
         <TextField
          id="filled-password-input"
          label="Password"
          name="password"
          onChange={handleOnChange}
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <br />
        <button type="submit" class="btn btn-success m-4 text-white px-5">Login</button>        <br />
        <Link to="/register"><h5 className="text-dark">Haven't registered yet?</h5></Link>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer></Footer>
           </div>
    );
};

export default Login;