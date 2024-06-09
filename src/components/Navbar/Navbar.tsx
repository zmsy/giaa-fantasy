import React from "react";
import giaaLogo from "../../assets/giaa-logo.svg";
import "./Navbar.css";
import { NavbarEntry } from "./NavbarEntry";

export const Navbar = () => {
	const navLinks = [
		{ name: "Players", link: "/players" },
		{ name: "Squads", link: "/squads" },
		{ name: "Matchups", link: "/matchups" },
		{ name: "About", link: "/about" },
	];

	return (
		<nav className="navbar navbar-light">
			<a className="navbar-left" href="/">
				<img src={giaaLogo} className="navbar-logo" alt="" />
				<span className="navbar-left-text">
					GIAA <span className="navbar-red">Fantasy Baseball</span>
				</span>
			</a>
			<ul className="navbar-right">
				{navLinks.map((i) => (
					<NavbarEntry key={i.name} name={i.name} link={i.link} />
				))}
			</ul>
		</nav>
	);
};
