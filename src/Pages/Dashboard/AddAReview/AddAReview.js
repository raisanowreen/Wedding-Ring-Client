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

        <div class="card bg-dark text-white">
          <img src="https://i.ibb.co/02h7h1D/alekon-pictures-yj4kw-A4h-Ms-unsplash-1.jpg" class="card-img" alt="..."/>
          <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="fs-3 text-white fw-bolder mb-3">Add Your Valuable Comment</h1>
        <p> <input className="px-5 py-2 rounded" type="text" {...register("name")} placeholder="Customer name"/>  </p>
        <textarea className="px-5 rounded" {...register("comment")} placeholder="Add a comment"/>  
        <p>      <button type="submit" class="btn btn-success m-4 text-white">Add a Review</button></p>
        </form> 
          </div>
        </div>
                    
                </div>
    );
};

export default AddAReview;