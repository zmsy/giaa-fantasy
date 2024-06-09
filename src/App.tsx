import React, { Component } from 'react';
import './App.css';
import { Navbar }  from './components/Navbar/Navbar';
import { LandingPage } from './components/LandingPage/LandingPage';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
      </div>
    );
  }
}
