import React from 'react';


const RestaurantList = (props) => {
  console.log(RestaurantList, "this is RestaurantList========")
  const restaurantList = props.restaurants.map((restaurant, i) => {
    return(
      <li key={i}>{restaurant.restaurants.restaurant}</li> 
    );
  })

  return (
    <div>
      <h4>restaurants:</h4>
      <ul>
        {restaurantList}
      </ul>
    </div>

    )
};

export default RestaurantList