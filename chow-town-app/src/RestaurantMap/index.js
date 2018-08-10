

<<<<<<< HEAD
      const foundRestaurants = await fetch('http//localhost:9000/searh');
      this.setState({restaurants: foundRestaurants});
      // console.log(this.state, ' this is this.state in RestaurantMap and the findRestaurants function');
      return this.state;
    }catch(err){
      console.log(err, ' this is an error in the RestaurantMap findRestaurants function');
    }
  }

  render(){
    console.log(this.state.restaurants, " this is this.state in RestaurantMap");
    // this.findRestaurants()
    return(
      <div>
        <Map google={this.props.google} zoom={14}>

         <Marker onClick={this.onMarkerClick}
                 name={'Current location'} />

         <InfoWindow onClose={this.onInfoWindowClose}>

         </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCoCFcifF1jJDfzgyrb-rMQckpMcmSo12Q')
})(RestaurantMap)
=======
>>>>>>> 580d62f1e99379642e601c991823193dd067b09d
