import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Weapon extends Component {
  state = {
    weapon: [],
    newWeapon: {
      name: "",
      weapon_type: "",
      ammo: "",
      image_url: ""
    },
    weaponForm: false
  };

  updatePage = () => {
    axios.get("/api/v1/weapon/").then(res => {
      this.setState({ weapon: res.data });
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  handleToggleNewForm = () => {
    this.setState(state => {
      return { weaponForm: !state.weaponForm };
    });
  };
  handleNewFormChange = evt => {
    const newWeapon = { ...this.state.newWeapon };
    newWeapon[evt.target.name] = evt.target.value;
    this.setState({ newWeapon });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/v1/weapon/", this.state.newWeapon).then(() => {
      this.setState({
        weaponForm: false,
        newWeapon: {
          name: "",
          weapon_type: "",
          ammo: "",
          image_url: ""
        }
      });
    });
    this.updatePage();
  };
  render() {
    let weapons = this.state.weapon.map(weapon => {
      return (
        <div className="weapon-header ">
          <div className="weapon-list">
            <div className="weapon-item">
              <div>
                <h3>{weapon.name}</h3>
              </div>
              <Link to={`/weapon/${weapon._id}`}>
                <img src={weapon.image_url} alt={weapon.name} />
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="weapon-header">Weapons</h1>
        <div>
          <button onClick={this.handleToggleNewForm}>Add New Weapon</button>
        </div>
        <br />
        {this.state.weaponForm ? (
          <form onSubmit={this.handleSubmit}>
            <div className="weapon-header">
              <label htmlFor="weapon-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.newWeapon.name}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="weapon-header">
              <label htmlFor="weapon-name">Weapon Type:</label>
              <input
                type="text"
                name="weapon_type"
                value={this.state.newWeapon.weapon_type}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="weapon-header">
              <label htmlFor="weapon-image">Image:</label>
              <input
                type="text"
                name="image_url"
                value={this.state.newWeapon.image_url}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="weapon-ammo">
              <label htmlFor="weapon-image">Ammo:</label>
              <input
                type="text"
                name="ammo"
                value={this.state.newWeapon.ammo}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <input className="add-submit" type="submit" value="Create Weapon" />
          </form>
        ) : (
          weapons
        )}
      </div>
    );
  }
}
