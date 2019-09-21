import './Navbar.scss';
import React, { FunctionComponent } from 'react';

interface NavbarEntryProps {
  name: string,
  link: string
}

const NavbarEntry: FunctionComponent<NavbarEntryProps> = (i: NavbarEntryProps) => {
  return <li key={i.name} className="nav-item Navbar-item-right">
    <a className="nav-link" href={i.link}>{i.name}</a>
  </li>;
}

export default NavbarEntry;
