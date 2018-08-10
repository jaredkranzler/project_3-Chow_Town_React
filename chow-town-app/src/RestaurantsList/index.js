import React from 'react';


const RestaurantsList = (props) => {
  const listrestaurant = props.restaurants.map((restaurant, i) =>{
       console.log(restaurant[i].restaurant.name, '========asfdfa=sf====asfd=a=sdf=')

    return (
      <li key={i}>
      <span>{restaurant[i].restaurant.name}</span>
      </li>
      );
  })

  return (
    <div>
      <ul>
        {listrestaurant}
      </ul>
    </div>
    )
};

export default RestaurantsList