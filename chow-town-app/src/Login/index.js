import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await loginResponse.json();

      if(parsedResponse.data === 'login successful'){
        this.props.history.push('/reviews');
      }
    } catch (err){
      console.log(err, '-login index---->>>>>error inside handleSubmit<<<<-------')
      }
  }

  handleChange = (e) => {
    this.state({[e.target.name]: e.target.value});
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <h1>LOGIN</h1>
        <label>
          username:
          <input type='text' name='username' onChange={this.handleChange} />
        </label>
        <label>
          password:
          <input type='text' name='password' onChange={this.handleChange} />
        </label> 
        <input type='submit' value='submit' />
      </form>     
      )
  }  
}


export default Login;

