import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="top-nav">Hang With Tom</div>
        <Calendar />
      </div>
    );
  }
}

export default App;
