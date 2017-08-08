import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateStates from './createStateUI.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>States</h2>
        </div>
        < CreateStates />
      </div>
    );
  }
}

export default App;
