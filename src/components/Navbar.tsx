import React, { Component } from 'react';
import giaaLogo from '../branding/giaa-logo.svg';
import './Navbar.scss'

class Navbar extends React.Component {
  render() {

    // let navElements = [
    //   ["Players", "/players"],
    //   ["Squads", "/squads"],
    //   ["Matchups", "/matchups"]
    // ];

    // for (let entry of navElements) {
    //   console.log(entry);
    // }

    return (
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
          <img src={giaaLogo} className="Navbar-logo" alt="" />
          <span className="Navbar-brand-text">GIAA <span className="Navbar-red">Fantasy Baseball</span></span>
        </a>
          <ul className="navbar-nav ml-auto Navbar-right">
            <li className="nav-item Navbar-item-right">
              <a className="nav-link">Players</a>
            </li>
            <li className="nav-item Navbar-item-right">
              <a className="nav-link">Squads</a>
            </li>
            <li className="nav-item Navbar-item-right">
              <a className="nav-link">Matchups</a>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;