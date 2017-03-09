import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className ="container">
        <div className="menu">
          <h1>Tic-Tac-Toe</h1>
          <Announcement />
        </div>
      </div>
    );
  }
}

export default App;
