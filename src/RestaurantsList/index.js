import React from 'react';


const RestaurantsList = (props) => {
  let listrestaurants;
  if(props.restaurants[0]) {
    console.log("in the if, here is props.restaurants[0]", props.restaurants[0])
    listrestaurants = props.restaurants[0].map((restaurant, index) =>{
    console.log(restaurant.restaurant, " this is the restaurant.restaurant")
    // for (let i = 0; i <restaurants[index].restaurant.length; i++ ){
         // console.log(listrestaurants, '========asfdfa=sf====asfd=a=sdf=')
         
      return (
        <li key={index}>
          <span>{restaurant.restaurant.name}</span>

        </li>
        );
    })

  }
  // console.log(typeof props.restaurants[0].restaurant, " this is typeof props.restaurants[0].restaurant in RestaurantsList")
  return (
    <div>
      <ul>
        {listrestaurants}
      </ul>
    </div>
    )
};

export default RestaurantsList