import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Character extends Component {
  state = {
    character: [],
    newCharacter: {
      name: "",
      passive_ability: "",
      ability: "",
      super: "",
      image_url: "",
      background: "",
      skin: "",
      kills: ""
    },
    characterForm: false
  };
  updatePage = () => {
    axios.get("/api/v1/character/").then(res => {
      this.setState({ character: res.data });
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  handleToggleNewForm = () => {
    this.setState(state => {
      return { characterForm: !state.characterForm };
    });
  };
  handleNewFormChange = evt => {
    const newCharacter = { ...this.state.newCharacter };
    newCharacter[evt.target.name] = evt.target.value;
    this.setState({ newCharacter });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/v1/character/", this.state.newCharacter).then(() => {
      this.setState({
        characterForm: false,
        newCharacter: {
          name: "",
          passive_ability: "",
          ability: "",
          super: "",
          image_url: "",
          background: "",
          skin: "",
          kills: ""
        }
      });
    });
    this.updatePage();
  };
  render() {
    let characters = this.state.character.map(character => {
      return (
        <div className="character-header ">
          <div className="character-list">
            <div className="character-item">
              <div>
                <h3>{character.name}</h3>
              </div>
              <Link to={`/character/${character.id}`}>
                <img src={character.image_url} alt={character.name} />
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="character-header">Characters</h1>
        <div>
          <button onClick={this.handleToggleNewForm}>Add New Character</button>
        </div>
        <br />
        {this.state.characterForm ? (
          <form onSubmit={this.handleSubmit}>
            <div className="character-header">
              <label htmlFor="character-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.newCharacter.name}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="character-header">
              <label htmlFor="character-description">Background:</label>
              <input
                type="text"
                name="background"
                value={this.state.newCharacter.background}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="character-header">
              <label htmlFor="character-image">Image:</label>
              <input
                type="text"
                name="image_url"
                value={this.state.newCharacter.image_url}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="character-header">
              <label htmlFor="character-skin">Skin:</label>
              <input
                type="text"
                name="skin"
                value={this.state.newCharacter.skin}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="character-header">
              <label htmlFor="character-ability">Passive Ability:</label>
              <input
                type="text"
                name="passive_ability"
                value={this.state.newCharacter.passive_ability}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="character-header">
              <label htmlFor="character-ability">Ability:</label>
              <input
                type="text"
                name="ability"
                value={this.state.newCharacter.ability}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="character-header">
              <label htmlFor="character-ability">Super:</label>
              <input
                type="text"
                name="super"
                value={this.state.newCharacter.super}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="character-header">
              <label htmlFor="character-ability">Kills:</label>
              <input
                type="number"
                name="kills"
                value={this.state.newCharacter.kills}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <input
              className="add-submit"
              type="submit"
              value="Create Character"
            />
          </form>
        ) : (
          characters
        )}
      </div>
    );
  }
}
