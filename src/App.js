import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    // super();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ]
    }
  }
  render() {
    return (
      <div className ="container">
        <div className="menu">
          <h1>Tic-Tac-Toe</h1>
          <Announcement />
          <ResetButton />
        </div>
      </div>
    );
  }
}

export default App;
