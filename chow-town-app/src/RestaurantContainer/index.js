import React, { Component } from 'react';

import RestaurantList from '../RestaurantList'

class RestaurantContainer extends Component {
  constructor(){
    super();

    this.state = {
      restaurants: []
    }
  }

  getRestaurants = async() => {
    try{
      const restaurants = await fetch('https://localhost:9000/search', {
        
      })
      const restaurantsJson = await restaurants.json();
      console.log(restaurantsJson)
      
      // return restaurantsJson.
    } catch (err){
      console.log(err, 'error in catch block getRestaurants')
      return err
    }
  }

  // componentDidMount() {
  //   this.getRestaurants().then((data) => {
  //     console.log(data, 'this is data in componentDidMount')
  //       this.setState({restaurants: data.restaurants})
  //   });
  // }

  render(){
    return(
      <div className="restaurantContainer">
        <h1>List of restaurants in your area</h1>
        <RestaurantList restaurants={this.state.restaurants}/>
      </div>

    );
  }
}

export default RestaurantContainer

