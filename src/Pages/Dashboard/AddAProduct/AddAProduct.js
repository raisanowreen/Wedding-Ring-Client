import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const AddAProduct = () => {
    const { register, handleSubmit, reset} = useForm();

const onSubmit = data => {
    console.log(data);

    // Add items api to database

    axios.post('http://localhost:5000/products', data)
    .then(res =>{
        if(res.data.insertedId){
            alert('New Ring Added Successfully');
            reset();
        }
    })
}

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

<p> <input className="px-5 py-2 rounded" type="text" {...register("name")} placeholder="food name"/>  </p>
<textarea className="px-5 rounded" {...register("details")} placeholder="food details"/>
<p>      <input className="px-5 py-2 rounded" type="number" {...register("price")} placeholder="food price"/></p>   
<input className="px-5 py-2 rounded" type="text" {...register("img")} placeholder="food image url" />    
<p>      <input className="px-5 py-2 rounded mb-5 mt-2 bg-warning" type="submit" /></p>
</form> 
        </div>
    );
};

export default AddAProduct;