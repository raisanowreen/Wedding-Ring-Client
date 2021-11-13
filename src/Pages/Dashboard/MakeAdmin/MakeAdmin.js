import React, { useState } from 'react';
import TextField from '@mui/material/TextField';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');

// add a new admin by existing admin
    const handleOnBlur = e =>{
       setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
fetch('https://boiling-everglades-45743.herokuapp.com/users/admin', {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then(res=> res.json())
.then(data =>{
    console.log(data)
})
        e.preventDefault();
    }
    return (
        <div>
            <h1 className="text-success mt-5">Make an Admin</h1>
           <form onSubmit={handleAdminSubmit} className="bg-dark p-5 w-50 mx-auto pt-5 mt-5 rounded">
           <TextField
          sx={{ bgcolor: 'warning.main'}}
          onBlur={handleOnBlur}
          type="email"           
          label="Email"
        /> 
       <button type="submit" class="btn btn-outline-info ms-3 mt-2 text-white">Make an Admin</button>
           </form>
        </div>
    );
};

export default MakeAdmin;