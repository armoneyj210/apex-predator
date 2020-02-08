import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SingleWeapon extends Component {
  state = {
    weapon: {
      name: "",
      image_url: "",
      weapon_type: "",
      ammo: "",
      description: ""
    },
    editForm: false,
    returnHome: false
  };
  updatePage = () => {
    axios
      .get(`/api/v1/weapon/${this.props.match.params.weaponId}/`)
      .then(res => {
        this.setState({ weapon: res.data });
      });
  };
  componentDidMount() {
    this.updatePage();
  }
  editFormChange = evt => {
    const newWeapon = { ...this.state.weapon };
    newWeapon[evt.target.name] = evt.target.value;
    this.setState({ weapon: newWeapon });
  };
  toggleEditForm = () => {
    this.setState(state => {
      return { editForm: !state.editForm };
    });
  };
  submitButtonAction = evt => {
    evt.preventDefault();
    axios
      .put(
        `/api/v1/weapon/${this.props.match.params.weaponId}/`,
        this.state.weapon
      )
      .then(res => {
        this.setState({ weapon: res.data, editForm: false });
        this.updatePage();
      });
  };
  deleteButtonAction = () => {
    axios
      .delete(`/api/v1/weapon/${this.props.match.params.weaponId}/`)
      .then(() => {
        this.setState({ returnHome: true });
      });
  };
  render() {
    return (
      <div>
        {this.state.returnHome === true ? <Redirect to="/weapon" /> : null}
        <div>
          <h1 className="weapon-header">{this.state.weapon.name}</h1>
        </div>
        {this.state.editForm ? (
          <form onSubmit={this.submitButtonAction}>
            <div className="weapon-header">
              <label htmlFor="weapon-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.weapon.name}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="weapon-header">
              <label htmlFor="weapon-description">Weapon Type:</label>
              <input
                type="text"
                name="weapon_type"
                value={this.state.weapon.weapon_type}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="weapon-header">
              <label htmlFor="weapon-image">Image:</label>
              <input
                type="text"
                name="image_url"
                value={this.state.weapon.image_url}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="weapon-header">
              <label htmlFor="weapon-desc">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.weapon.description}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="weapon-header">
              <label htmlFor="weapon-ammo">Ammo:</label>
              <input
                type="text"
                name="ammo"
                value={this.state.weapon.ammo}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <input className="add-submit" type="submit" value="Save Weapon" />
          </form>
        ) : (
          <div>
            <img
              className="weapon-img"
              src={this.state.weapon.image_url}
              alt="weapon"
            />
            <p className="weapon-desc">{this.state.weapon.weapon_type}</p>
            <p className="weapon-desc">{this.state.weapon.description}</p>
            <div>Ammo: {this.state.weapon.ammo}</div>
          </div>
        )}
        <div>
          <button onClick={this.toggleEditForm}>Edit Weapon</button>
          <button onClick={this.deleteButtonAction}>Delete Weapon</button>
        </div>
      </div>
    );
  }
}
