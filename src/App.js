import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
// import Events from './components/events/Events';
import Events from './components/events/Events'

class App extends Component{

  render() {
    return (
      <div className="App">
        <Navbar />
        <Events />
        {/* <Events /> */}
      </div>
    );
  }
}

export default App;
