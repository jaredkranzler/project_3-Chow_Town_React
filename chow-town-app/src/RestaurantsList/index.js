import React from 'react';

const RestaurantsList = (props) => {
  console.log(props, 'this is props ======RestaurantsList')
  const restaurantsList = props.restaurants.map((restaurant, i) =>{
    return (
      <li key={i}>{restaurant[0].restaurants}</li>
      );
    console.log(restaurant.city, '========asfdfa=sf====asfd=a=sdf=')
  })

  return (
    <div>
      <ul>
        {restaurantsList}
      </ul>
    </div>
    )
};

export default RestaurantsList