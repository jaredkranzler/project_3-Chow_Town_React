import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type='text' name='search' onChange={this.props.handleChange} placeholder='Search' />
        <button>Search</button>
      </form>
      )
  }
}

export default Search