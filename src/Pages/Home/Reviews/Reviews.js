import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);
    return (
     <div>
             <h1 className="text-success mt-5 mb-3">Our Reviews</h1>

        <div class="row row-cols-1 row-cols-md-2 g-2 w-100">
       {
reviews.map(review => <div><div class="card border-info mb-3">
<div class="card-header">Review</div>
<div class="card-body">
<h5 class="card-title">{review.name}</h5>
<p class="card-text">{review.comment}</p>
</div>  
</div></div>)
          }
       </div>
     </div>
    );
};

export default Reviews;