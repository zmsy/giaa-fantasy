import React, { Component } from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { NavMenu, Navbar } from "./components/Navbar/Navbar";

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
