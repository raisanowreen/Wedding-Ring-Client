import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() =>{
        fetch('https://boiling-everglades-45743.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);
    return (
     <div className="bg-dark">
             <h3 className="text-success pt-5">Our Clients' Reviews</h3>

        <div class="row row-cols-1 row-cols-md-2 g-2 w-100 p-5">
       {
reviews.map(review => <div><div class="card h-100 border-info mb-3">
<div class="card-header bg-success text-info"><span className="text-white">Ratings:</span> <Rating readonly emptySymbol="far fa-star"
  fullSymbol="fas fa-star"   initialRating={review.rating}
  ></Rating>
</div>
<div class="card-body p-5">
<h5 class="card-title text-success">Hi! I am {review.name}</h5>
<p class="card-text">{review.comment}</p>
</div>  
</div></div>)
          }
       </div>
     </div>
    );
};

export default Reviews;