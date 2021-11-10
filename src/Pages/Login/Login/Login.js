import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useHistory,
    useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
        alert("Hello")
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
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
        <Button type="submit">Login</Button>
        <br />
        <Link to="/register">Haven't registered yet?</Link>
            </form>
        </Grid>
      </Grid>
    );
};

export default Login;