import React from 'react';


const RestaurantList = (props) => {
  const restaurantList = props.restaurants.map((restaurant, i) => {
      console.log(props, "this is RestaurantList========")

    return(
      <li key={i}></li> 
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