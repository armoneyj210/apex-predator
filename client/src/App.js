import React from "react";
import { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Character from "./components/Character";
import Home from "./components/Home";
import Map from "./components/Map";
import Weapon from "./components/Weapon";
import WeaponType from "./components/WeaponType";
import Skin from "./components/Skin";
import SingleCharacter from "./components/SingleCharacter";
import SingleWeapon from "./components/SingleWeapon";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <NavBar />
        </div>

        <Router>
          <Switch>
            <Route exact path="/skin" component={Skin} />
            <Route exact path="/character" component={Character} />
            <Route exact path="/weapon" component={Weapon} />
            <Route exact path="/weapon_type" component={WeaponType} />
            <Route exact path="/map" component={Map} />
            <Route
              exact
              path="/character/:characterId"
              component={SingleCharacter}
            />
            <Route exact path="/weapon/:weaponId" component={SingleWeapon} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
