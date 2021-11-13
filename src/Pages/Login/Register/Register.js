import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';import TextField from '@mui/material/TextField';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';



const Register = () => {
    const {registerUser, user, authError} = useAuth();
    const [loginData, setLoginData] = useState({})
    const history = useHistory();

const handleOnBlur = e =>{
const field = e.target.name;
const value = e.target.value;
const newLoginData = {...loginData};
newLoginData[field] = value;
setLoginData(newLoginData);
console.log(field, value);
}


    const handleLoginSubmit = e =>{
        if(loginData.password == loginData.password2){
            alert("Registered Successfully")
            e.preventDefault();
        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
       
    }
    return (
     <div>
       <Navigation></Navigation>
       <br />
      <div>
      <div class="card bg-dark text-white mt-5 pt-5">
          <img src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img" alt="..."/>
          <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <form onSubmit={handleLoginSubmit} className="bg-info p-4">
          <h3 className="text-success mb-3">Register Please</h3>            
          <TextField
    id="filled-search"
    label="Your Name"
    name="name"
    onBlur={handleOnBlur}
    type="text"
    variant="filled"
  />
  <br />
      <TextField
    id="filled-search"
    label="Your Email"
    name="email"
    onBlur={handleOnBlur}
    type="text"
    variant="filled"
  />
  <br />
   <TextField
    id="filled-password-input"
    label="Password"
    name="password"
    onChange={handleOnBlur}
    type="password"
    autoComplete="current-password"
    variant="filled"
  />
  <br />
   <TextField
    id="filled-password-input"
    label="Confirm Password"
    name="password2"
    onChange={handleOnBlur}
    type="password"
    autoComplete="current-password"
    variant="filled"
  />
  <br />
  <button type="submit" class="btn btn-success m-4 text-white px-5">Register</button>   <br />
  <Link to="/login"><h5 className="text-dark">Already registered?</h5></Link>


 



      </form>
          </div>
        </div>
           </div>
           <br />
           <Footer></Footer>
     </div>
    );
};

export default Register;