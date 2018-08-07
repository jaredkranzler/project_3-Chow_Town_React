import React, { Component } from 'react';


const EditUser = (props) => {
  return (
    <div>
      <h4> Edit Info: </h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit First Name:
          <input className="firstName" type='text' name='firstName' onChange={props.handleFormChange} value={props.userToEdit.firstName} placeholder='firstName' />
        </label>
        <label>
          Edit Last Name:
          <input className="lastName" type='text' name='lastName' onChange={props.handleFormChange} value={props.userToEdit.lastName} placeholder='lastName' />
        </label>
        <label>
          Edit Address:
          <input className="address" type='text' name='address' onChange={props.handleFormChange} value={props.userToEdit.address} placeholder='address' />
        </label>
        <label>
          Edit City:
          <input className="city" type='text' name='city' onChange={props.handleFormChange} value={props.userToEdit.city} placeholder='city' />
        </label>
        <label>
          Edit State:
          <input className="state" type='text' name='state' onChange={props.handleFormChange} value={props.userToEdit.state} placeholder='state' />
        </label>
        <label>
          Edit Zip:
          <input className="zip" type='text' name='zip' onChange={props.handleFormChange} value={props.userToEdit.zip} placeholder='zip' />
        </label>
        <label>
          Edit Phone:
          <input className="phone" type='text' name='phone' onChange={props.handleFormChange} value={props.userToEdit.phone} placeholder='phone' />
        </label>
        <label>
          Edit Email:
          <input className="email" type='text' name='email' onChange={props.handleFormChange} value={props.userToEdit.email} placeholder='email' />
        </label>
        <input type='submit' value='submit' />
      </form> 
    </div>
      )
}

export default EditUser;