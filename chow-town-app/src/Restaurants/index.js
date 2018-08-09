import React, {Component} from 'react'

class Restaurants extends Component {
  render() {
    console.log(this.props.restaurant.embed_url)
    return(
        <div key={this.props.keys}>
          <iframe src={this.props.restaurant.embed_url} width="480" height="390" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
    )
  }
}


export default Restaurants