import React, { Component } from 'react';
import CreatUser from '../CreateUser';
import EditUser from '../EditUser';

const Reviews = (props) => {
  console.log(props)
  // const reviewList = props.reviews.map((review, i) => {
  //   return (
  //     <li key={review._id}>
  //       <span>{review.review}</span><br/>
  //       <small>{review.rating}</small><br/>
  //       <button onClick={props.deletereview.bind(null, review._id)}>Delete</button>
  //       <button onClick={props.showModal.bind(null, review._id, i)}>Edit</button>
  //     </li>
  //     )
  // })
  return (
    <ul>
    reviewList
    </ul>
    )
};

export default Reviews;
