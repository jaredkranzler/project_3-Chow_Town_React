import React, { Component } from 'react';
import RestaurantList from '../RestaurantList'
import Search from '../Search'
import Restaurants from '../Restaurants'
class RestaurantContainer extends Component {
  constructor(){
    super();

    this.state = {
      restaurants: [],
      search: ''
      // restaurantsFetch: false,
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
          // console.log(searchRestaurant, 'here is restaurants')

      const searchRestaurant = await fetch('http://localhost:9000/search', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(searchRestaurant, 'searchRestaurant --------------------')
      const parsedResponse = await searchRestaurant.json();
      this.setState({restaurants: [...this.state.restaurants, parsedResponse.restaurants]});
      console.log(parsedResponse.restaurants, 'asfasdfasdfsa')
  //   
    } catch (err){
      console.log(err, '-login index---->>>>>error inside handleSubmit<<<<-------')
      }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const input = e.target.childNodes[0].value;
  //   e.target.childNodes[0].value = '';
  //   this.searchRestaurant();
  // }


  // searchRestaurant = async (restaurant, e) => {
  //   console.log(restaurant, ' this is searchRestaurant<<<<<<<')
  //   // e.preventDefault();
  //   try {
  //     const findRestaurant = await fetch('https://loacalhost:9000/search', {
  //     // then((data) => {
  //       method: 'POST',
  //       credentials: 'include',
  //       body: JSON.stringify(restaurant),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //       // data.json().then(dataJSON => {
  //       // this.setState({
  //       //   search: input,
  //       //   restaurants: dataJSON.data,
  //       //   restaurantsFetch: true
  //       // })
  //       // })
  //     });
  //     const parsedResponse = await findRestaurant.json();
  //     this.setState({restaurants: [...this.state.restaurants, parsedResponse.data]});
  //   }catch (err){

  //     console.log(err, 'this is error at searchRestaurant -----------------------!!')

  //   }
  //   // const resultsJSON = results.json();
  // }

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
        { this.state.restaurantsFetch ? this.state.restaurants.map((restaurant, i) => <Restaurants keys={i} restaurant={this.state.restaurants}/>) : <Search handleSubmit={this.handleSubmit} /> }
        <h1>List of restaurants in your area</h1>
        <RestaurantList restaurants={this.state.restaurants}/>
      </div>


    );
  }
}

export default RestaurantContainer

