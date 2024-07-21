import React from "react";
import giaaLogo from "../../assets/giaa-logo.svg";
import "./Navbar.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <a className="navbar-left" href="/">
        <img src={giaaLogo} className="navbar-logo" alt="" />
        <div className="navbar-logo-text">
          <span className="navbar-left-text">
            GIAA <span className="navbar-red">Fantasy Baseball</span>
          </span>
        </div>
      </a>
      <div className="navbar-right">
        <NavMenu />
      </div>
    </nav>
  );
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Players",
    href: "/players",
    description: "MLB player stats.",
  },
  {
    title: "Squads",
    href: "/squads",
    description: "Individual fantasy teams and their players.",
  },
  {
    title: "League",
    href: "/league",
    description: "Information/matchups/stats on the GIAA league.",
  },
];

/**
 * Navbar, implemented using react-router.
 */
export function NavMenu() {
  return (
    <NavigationMenu className="navbar">
      <NavigationMenuList>
        {components.map((component) => (
          <NavigationMenuItem
            key={component.title}
            className="navigation-menu-item"
          >
            <Link to={component.href}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {component.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
