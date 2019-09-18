import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
