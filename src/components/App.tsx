import React, { Component } from 'react';
import logo from '../branding/logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> This is the start of GIAA Fantasy. </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
