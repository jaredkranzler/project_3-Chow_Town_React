import React, { Component } from 'react';
import Reviews from '../Reviews';
import CreateReview from '../CreateReview';
import EditReview from '../EditReview';
import RestaurantContainer from '../RestaurantContainer'
class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      reviews: [],
      showEdit: false,
      editRevieId: null,
      reviewToEdit: {
        review: '',
        rating: ''
      }
    }
  }

  // componentDidMount(){

  //   this.getReviews().then((reviews) => {
  //     this.setState({reviews: reviews.data})
  //   }).catch(err => {
  //     console.log(err, 'error at componentDidMount');
  //   })
  // }

  getReviews = async () =>{
    try{
      const reviews = await fetch('http://localhost:9000/review');
      const parsedReviews = reviews.json();
      return parsedReviews
    }catch(err){
      console.log(err, 'error error at catch getReview')
    }
  }

  addReview = async (review, e) => {
    console.log(review, "this is addreview in MainContainer")
    e.preventDefault();
    try{
      const creatReview = await fetch('http://localhost:9000/reviews', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(review),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await creatReview.json();
      this.setState({reviews: [...this.state.reviews, parsedResponse.data]});
    }catch(err){
      console.log(err, 'error at addreview')
    }
  }

  deleteReview = async (id, e) => {
    e.preventDefault();
    console.log('deletereview function called')
    try{
      const deleteReview = await fetch('http://localhost:9000/reviews' + id, {
        method: 'Delete'
      });
      const parsedResponse = await deleteReview.json();
      this.setState({reviews: this.state.reviews.filter((review, i) => review._id !==id)});
    }catch (err){
      console.log(err, 'deleted error')
    }
  }

  showModal = (id) => {
    const reviewToEdit = this.state.reviews.find((review) => review._id ==id);
    this.setState({
      showEdit: true,
      editReviewId: id,
      reviewToEdit: reviewToEdit
    });
  }
  closeAndEdit = async (e) => {
    e.preventDefault();

    try{
      const editReview = await fetch('http://localhost:9000/review' + this.state.editReviewId, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.reviewToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await editReview.json();
      const editReviewArray = this.state.reviews.map((review) => {

        if(review._id === this.state.editReviewId){

          review.review = parsedResponse.data.review;
          review.rating = parsedResponse.data.rating;
        }
        return review
      })

      this.setState({
        reviews: editReviewArray,
        showEdit: false
      });
    }catch(err){
      console.log(err, 'there is an errror close and edit')
    }
  }

  handleFormChange = (e) => {
    this.setState({
      reviewToEdit: {
        ...this.state.reviewToEdit,
        [e.target.name]: e.target.value
      }
    })
  }
  render(){
    return(
      <div>
      <Reviews reviews={this.state.reviews} deleteReview={this.deleteReview} showModal={this.showModal}/>
      <CreateReview addReview={this.addReview} />
      {this.state.showEdit ? <editReview closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} reviewToEdit={this.state.reviewToEdit} /> : null}
      </div>
      
    )
  }
}




export default MainContainer;