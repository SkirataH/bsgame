import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="topMenu">
        <ul className="topMenu_list">
          <li className="topMenu_items">
            <Link to="/">Home</Link>
          </li>
          <li className="topMenu_items">
            <Link to="/sign-in">Login</Link>
          </li>
          <li className="topMenu_items">
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
