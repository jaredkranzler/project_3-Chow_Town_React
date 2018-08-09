import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import MainContainer from './MainContainer';
import RestaurantContainer from './RestaurantContainer';
import CreateUser from './CreateUser'
import Search from './Search'

const My404 = () => {
  return(
    <div>
      You Get Your Damn Hands Off Her.. Bifff
    </div>

    )
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false,
      username: ''

    }
  }

  login = (username) => {
    console.log('login function working')

    this.setSate({
      username: username,
      logged: true
    });
  }

  // set logged -- some function passed down in props


  render() {
    return (
      <div className="App">
      <Header className="App-header"/>
        <h1 className="App-title">Welcome to Chow-Town</h1>
        <p className="App-intro">
          Login to get started! Then get to Chowin!
        </p>
        <main>
          <Switch>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/" component={ MainContainer }/>
            <Route exact path="/register" component={ CreateUser }/>
            <Route component={ My404 }/>
          </Switch>
          <RestaurantContainer searchChange={this.searchChange} />
        </main>
      </div>
    );
  }
}

export default App;
