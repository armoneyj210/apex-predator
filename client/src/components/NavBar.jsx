import React, { Component } from "react";
import Logo from "../images/flat,1000x1000,075,f.u1.jpg";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="home-logo">
          <a href="/">
            <img className="home-logo" src={Logo} alt="logo" />
          </a>
        </div>

        <ul className="navbar">
          <li className="navbar-item">
            <a href="/character">Characters</a>
          </li>
          ||
          <li className="navbar-item">
            <a href="/weapon">Weapons</a>
          </li>
          ||
          <li className="navbar-item">
            <a href="/skin">Skins</a>
          </li>
          ||
          <li className="navbar-item">
            <a href="/map">Maps</a>
          </li>
        </ul>
      </div>
    );
  }
}
