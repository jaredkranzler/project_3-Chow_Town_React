import React from 'react';

const Search = (props) => {

  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="city" onChange={props.handleChange} value={props.query} placeholder="Search" />

        <input type="submit" value="submit" />
      </form>
    </div>
    )
}



export default Search;