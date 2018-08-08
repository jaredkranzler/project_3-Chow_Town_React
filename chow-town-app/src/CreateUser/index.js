import React, { Component } from 'react';

class CreateUser extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: ''
    }
  } 
  updateUser = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  addUser = async (e) => {
    e.preventDefault();
    try{

      const CreateUser = await fetch('http://localhost:9000/auth/register', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await CreateUser.json();
      console.log(parsedResponse, "===================")
      
      // this.setState({users: [...this.state.users, parsedResponse.data]});
    }catch (err){
      console.log(err, 'error at addUser------')
    }

  }
  render(){
    return(
      <form onSubmit={this.addUser}>
        <label>
          User:
          <input className="username" type='text' name='username' onChange={this.updateUser} placeholder='username' />
        </label>
        <label>
          Password:
          <input className="password" type='text' name='password' onChange={this.updateUser} placeholder='password' />
        </label>
        <label>
          First Name:
          <input className="firstName" type='text' name='firstName' onChange={this.updateUser} placeholder='firstName' />
        </label>
        <label>
          Last Name:
          <input className="lastName" type='text' name='lastName' onChange={this.updateUser} placeholder='lastName' />
        </label>
        <label>
          Address:
          <input className="address" type='text' name='address' onChange={this.updateUser} placeholder='address' />
        </label>
        <label>
          City:
          <input className="city" type='text' name='city' onChange={this.updateUser} placeholder='city' />
        </label>
        <label>
          State:
          <input className="state" type='text' name='state' onChange={this.updateUser} placeholder='state' />
        </label>
        <label>
          Zip:
          <input className="zip" type='text' name='zip' onChange={this.updateUser} placeholder='zip' />
        </label>
        <label>
          Phone:
          <input className="phone" type='text' name='phone' onChange={this.updateUser} placeholder='phone' />
        </label>
        <label>
          Email:
          <input className="email" type='text' name='email' onChange={this.updateUser} placeholder='email' />
        </label>
        <input type='submit' value='submit' />
      </form> 
      )
  }
}



export default CreateUser;