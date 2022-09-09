import React from 'react'
import './ReviewCard.css'
const ReviewCard = (props) => {
  return (
    <div className="review-card">
        <h2>{props.review}</h2>
        <div>by: {props.fullname}</div>
        <div>{props.rating} ⭐</div>
    </div>
  )
}

export default ReviewCard