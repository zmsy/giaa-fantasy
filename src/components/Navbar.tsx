import React, { Component } from 'react';
import giaaLogo from '../giaa-logo.svg';
import './Navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={giaaLogo} className="Navbar-logo" alt="" />
          GIAA Fantasy Baseball
        </a>
      </nav>
    );
  }
}

export default Navbar;