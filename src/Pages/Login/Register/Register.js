import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';import TextField from '@mui/material/TextField';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



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
            alert("Hello")
            e.preventDefault();
        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
       
    }
    return (
        <Grid container spacing={2}>
    <Grid item xs={12} md={8}>
       
    </Grid>
    <Grid item xs={12} md={4}>
        <form onSubmit={handleLoginSubmit}>
        <Typography>Login</Typography>
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
      label="Password2"
      name="password2"
      onChange={handleOnBlur}
      type="password"
      autoComplete="current-password"
      variant="filled"
    />
    <br />
    <Button type="submit">Register</Button>
    <br />
    <Link to="/login">Already Registered?</Link>
        </form>
    </Grid>
  </Grid>
    );
};

export default Register;