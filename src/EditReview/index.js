import React, { Component } from 'react';



const EditReview = (props) => {

  return (
    <div>
      <h4> Edit Review </h4>
        <form onSubmit={props.closeAndEdit}>
          <label>
            Edit Review:
            <input type="text" name="review" onChange={props.handleFormChange} value={props.reviewToEdit.review} />
          </label>
          <label>
            Edit Description:
            <input type="text" name="rating" onChange={props.handleFormChange} value={props.reviewToEdit.rating} />
         </label>
          <input type="submit"/>
        </form>
    </div>
      
    )
}




export default EditReview;