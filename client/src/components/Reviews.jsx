import React from "react";
import StarRating from "./StarRating";

const Reviews = ({reviews}) => {
	reviews && reviews ? console.log(reviews, "reviews are here") : console.log("not hitting it");
	console.log(reviews, "WHAT UP?");
	return (
		<div className="row row-cols-3 mb-2">
			{reviews && reviews.map((review) => {
				console.log(reviews.length, "single review!!!!!!!!!")
				return (
					<div className="card text-white bg-primary mb-3 mr-4" key={review.id} style={{maxWidth: "30%"}}>
						<div className="card-header d-flex justify-content-between">
							<span>{review.name}</span>
							<span><StarRating rating={review.rating}/></span>
						</div>
						<div className="card-body">
							<p className="card-text">{review.review}</p>
						</div>
					</div>
				)
			})}
		</div>
	);
}

export default Reviews;
