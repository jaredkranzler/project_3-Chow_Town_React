import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="container">
    <header className="App-header">
      <img src="http://chowtownllc.com/wp-content/uploads/2013/11/chowt-300x138.png" className="App-logo" alt="logo" />
      <ul>
        <li><Link to='/login' className='link' >Login</Link></li>
        <li><Link to='/register' className='link' >Register</Link></li>
      </ul>
    </header>
    </div>
  )
}


export default Header;