import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const AddAReview = () => {
    const { register, handleSubmit, reset} = useForm();

const onSubmit = data => {
    console.log(data);

    // Add items api to database

    axios.post('http://localhost:5000/reviews', data)
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

<p> <input className="px-5 py-2 rounded" type="text" {...register("name")} placeholder="user name"/>  </p>
<textarea className="px-5 rounded" {...register("review")} placeholder="Add a review"/>  
<p>      <input className="px-5 py-2 rounded mb-5 mt-2 bg-warning" type="submit" /></p>
</form> 
        </div>
    );
};

export default AddAReview;