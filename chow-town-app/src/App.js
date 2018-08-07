import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import CreateUser from './CreateUser';
import Header from './Header';

const My404 = () => {
  return(
    <div>
      You Get Your Damn Hands Off Her.. Bifff
    </div>

    )
}

class App extends Component {
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
            <Route exact path="/" component={ Login }/>
            <Route component={ My404 }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
