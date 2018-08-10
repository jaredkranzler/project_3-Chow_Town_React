import React, { Component } from 'react';

class CreateReview extends Component {
  constructor(){
    super();

    this.state = {
      review: '',
      rating: ''
    }
  }

  updateReview = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
    // console.log(this.state)
  }

  render(){
    // console.log(this.props,"here is props")
    return(
      <form onSubmit={this.props.addReview.bind(null, this.state)}>
        <label>
          Review:
          <input className="review" type="text" name="review" onChange={this.updateReview} placeholder=" Review" />
        </label>
        <label>
          Rating:
          <input className="rating" type="number" name="rating" onChange={this.updateReview} placeholder="rating" />
        </label>
        <input type="submit" value="create Review" />
      </form>
        
      )
  }
}


export default CreateReview;


