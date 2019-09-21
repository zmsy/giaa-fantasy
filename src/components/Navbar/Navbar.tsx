import React from 'react';
import giaaLogo from '../../branding/giaa-logo.svg';
import './Navbar.scss';
import NavbarEntry from './NavbarEntry';

class Navbar extends React.Component {
  render() {

    let navLinks = [
      {"name": "Players", "link": "/players"},
      {"name": "Squads", "link": "/squads"},
      {"name": "Matchups", "link": "/matchups"},
      {"name": "About", "link": "/about"}
    ];

    const navBarEntries = navLinks.map((i) =>
      <NavbarEntry key={i.name} {...i} />
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
