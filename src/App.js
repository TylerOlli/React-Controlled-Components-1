import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value: "",
  };

  updateText = event => {
    this.setState({ value: event.target.value });
  };

  clearText = () => {
    this.setState({ value: "" });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
           <input
            className='inputField'
            type='text'
            placeholder='Type Here'
            value={this.state.value}
            onChange={this.updateText}
          />
          <p className="echo">Echo:</p>
          <p>{this.state.value}</p>
		  <button onClick={this.clearText}>Clear Text</button>
        </div>
      </div>
    );
  }
}

export default App;
