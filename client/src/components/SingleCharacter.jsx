import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SingleCharacter extends Component {
  state = {
    character: {
      name: "",
      passive_ability: "",
      ability: "",
      super: "",
      image_url: "",
      background: "",
      skin: "",
      kills: ""
    },
    editForm: false,
    returnHome: false
  };
  updatePage = () => {
    axios
      .get(`/api/v1/character/${this.props.match.params.characterId}/`)
      .then(res => {
        this.setState({ character: res.data });
      });
  };
  componentDidMount() {
    this.updatePage();
  }
  editFormChange = evt => {
    const newCharacter = { ...this.state.character };
    newCharacter[evt.target.name] = evt.target.value;
    this.setState({ character: newCharacter });
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
        `/api/v1/character/${this.props.match.params.characterId}/`,
        this.state.character
      )
      .then(res => {
        this.setState({ character: res.data, editForm: false });
        this.updatePage();
      });
  };
  deleteButtonAction = () => {
    axios
      .delete(`/api/v1/character/${this.props.match.params.characterId}/`)
      .then(() => {
        this.setState({ returnHome: true });
      });
  };
  render() {
    return (
      <div>
        {this.state.returnHome === true ? <Redirect to="/character/" /> : null}
        <div>
          <h1 className="char-desc">{this.state.character.name}</h1>
        </div>
        {this.state.editForm ? (
          <form onSubmit={this.submitButtonAction}>
            <div className="char-desc">
              <label htmlFor="character-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.character.name}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="char-desc">
              <label htmlFor="character-description">Description:</label>
              <input
                type="text"
                name="background"
                value={this.state.character.background}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="char-desc">
              <label htmlFor="character-image">Image:</label>
              <input
                type="text"
                name="image_url"
                value={this.state.character.image_url}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="char-desc">
              <label htmlFor="character-skin">Skin:</label>
              <input
                type="text"
                name="skin"
                value={this.state.character.skin}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="char-desc">
              <label htmlFor="character-ability">Passive Ability:</label>
              <input
                type="text"
                name="passive_ability"
                value={this.state.character.passive_ability}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="char-desc">
              <label htmlFor="character-ability">Ability:</label>
              <input
                type="text"
                name="ability"
                value={this.state.character.ability}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="char-desc">
              <label htmlFor="character-ability">Super:</label>
              <input
                type="text"
                name="super"
                value={this.state.character.super}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div className="char-desc">
              <label htmlFor="character-ability">Kills: </label>
              <input
                type="number"
                name="kills"
                value={this.state.character.kills}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <input
              className="add-submit"
              type="submit"
              value="Save Character"
            />
          </form>
        ) : (
          <div>
            <img
              className="char-desc"
              src={this.state.character.image_url}
              alt="character"
            />
            <p className="char-desc char-item">
              {this.state.character.background}
            </p>
            <div className="char-desc">
              <h3 className="char-item">Passive Ability:</h3>
              <p className="char-item">
                {this.state.character.passive_ability}
              </p>
            </div>
            <div className="char-desc">
              <h3 className="char-item">Tactical Ability:</h3>
              <p className="char-item">{this.state.character.ability}</p>
            </div>
            <div className="char-desc">
              <h3 className="char-item">Ultimate Ability:</h3>
              <p className="char-item">{this.state.character.super}</p>
            </div>
            <div className="char-desc">
              <h3 className="char-item">Kills:</h3>
              <p className="char-item">{this.state.character.kills}</p>
            </div>
          </div>
        )}
        <div>
          <button onClick={this.toggleEditForm}>Edit Character</button>
          <button onClick={this.deleteButtonAction}>Delete Character</button>
        </div>
      </div>
    );
  }
}
