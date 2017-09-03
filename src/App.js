import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Puzzle Game</h2>
        </div>
        <p className="App-intro">
         This app will allow you to play a puzzle game with any pic of your choice or some pre selected pictures from our directory.
        </p>
      </div>
    );
  }
}

export default App;
