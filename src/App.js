import React, { Component } from 'react';
import './App.css';
import Day from "./components/calendar/Day"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Day />
        </header>

      </div>
    );
  }
}

export default App;
