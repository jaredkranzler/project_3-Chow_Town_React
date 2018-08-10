import React, { Component } from 'react';
import Search from '../Search'
import RestaurantsList from '../RestaurantsList'
class SearchContainer extends Component {
  constructor(){
    super();
    this.state = {
      restaurants: [],
      query: '',
      city: ''
    };
  }



  handleChange = async (e) => {
    try {
      this.setState({city: e.target.value})
      // console.log(this.state, 'this is state at the ---------> SearchContainer <------------')
    }catch(err){
      console.log(err, 'error at handleChange')
    }
  }

  // cl post request
  handleSubmit = async (e) => {
    e.preventDefault();
    try{
      // console.log(this.state, '-----> HERE ARE this.state')
      console.log(this.state, '-----> HERE ARE this.state')

      const searchResponse = await fetch("http://localhost:9000/search/", {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await searchResponse.json();
      console.log('!!!!!!!!!! what up parsedResponse!!!!!!!!!!', parsedResponse)

      this.setState({restaurants: [...this.state, parsedResponse.restaurants]})
    }catch (err){
      console.log(err, '----->>> this is the query at SearchContainer')
    }
    // console.log(this.state.city, '-----> HERE ARE restaurants')

  }


  render(){
    return(
      <div>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <RestaurantsList restaurants={this.state.restaurants}/>

      </div>
      )
  }
}



export default SearchContainer;

