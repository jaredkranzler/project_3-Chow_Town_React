import React, { Component } from 'react';
import Search from '../Search'
import RestaurantsList from '../RestaurantsList'
class SearchContainer extends Component {
  constructor(){
    super();
    this.state = {
      restaurants: [],
      query: ''
    };
  }



  handleChange = async (e) => {
    try {
      this.setState({[e.target.name]: e.target.value})
      // console.log(this.state, 'this is state at the ---------> SearchContainer <------------')
    }catch(err){
      console.log(err, 'error at handleChange')
    }
  }

  // cl post request
  handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const searchResponse = await fetch("https://chow-town-back.herokuapp.com/search/", {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // console.log(searchResponse, 'this is searchResponse++++++')
      // console.log(this.state.query, 'this.state.restaurants -------------')
      // const query = this.state.query
      const parsedResponse = await searchResponse.json();
      console.log(parsedResponse.restaurants, '>>>>>>><<><><><>>>>>searchResponseJSON')
      this.setState({restaurants: [...this.state.restaurants, parsedResponse.restaurants]})
      // console.log(this.state.restaurants, '===================this.state')
      // console.log(query, '----->>> this is the query at SearchContainer')
    }catch (err){
      console.log(err, '----->>> this is the query at SearchContainer')
    }
    console.log(this.state.restaurants, '-----> HERE ARE restaurants')
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
