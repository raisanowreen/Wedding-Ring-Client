import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';


const AddAReview = () => {
    const { register, handleSubmit, reset} = useForm();

const onSubmit = data => {
    console.log(data);

    // Add reviews api to database

    axios.post('https://boiling-everglades-45743.herokuapp.com/reviews', data)
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
          <img src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img" alt="..."/>
          <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-success p-5">
          <h1 className="fs-3 text-white fw-bolder mb-3">Add Your Valuable Comment</h1>
        <p> <input className="px-5 py-2 rounded" type="text" {...register("name")} placeholder="Customer name"/>  </p>
        <textarea className="px-5 rounded" {...register("comment")} placeholder="Add a comment"/>  
        <p> <input className="px-5 py-2 rounded" type="number" {...register("rating")} placeholder="Rate us out of 5"/>  </p>
        <p>      <button type="submit" class="btn btn-outline-info m-4 text-white">Add a Review</button></p>
        </form> 
          </div>
        </div>
                </div>
    );
};

export default AddAReview;