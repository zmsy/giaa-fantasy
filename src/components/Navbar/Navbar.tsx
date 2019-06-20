import React from 'react';
import giaaLogo from '../../branding/giaa-logo.svg';
import './Navbar.scss'

class Navbar extends React.Component {
  render() {

    let navLinks = [
      ["Players", "/players"],
      ["Squads", "/squads"],
      ["Matchups", "/matchups"],
      ["About", "/about"]
    ];
    const navBarEntries = navLinks.map((i) =>
      <li className="nav-item Navbar-item-right">
        <a className="nav-link" href={i[1]}>{i[0]}</a>
      </li>
    );

    return (
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">
          <img src={giaaLogo} className="Navbar-logo" alt="" />
          <span className="Navbar-brand-text">GIAA <span className="Navbar-red">Fantasy Baseball</span></span>
        </a>
        <ul className="navbar-nav ml-auto Navbar-right">
          {navBarEntries}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
