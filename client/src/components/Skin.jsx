import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Skin extends Component {
  state = {
    skin: [],
    newSkin: {
      name: "",
      image_url: ""
    },
    skinForm: false
  };

  updatePage = () => {
    axios.get("/api/v1/skin/").then(res => {
      this.setState({ skin: res.data });
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  handleToggleNewForm = () => {
    this.setState(state => {
      return { skinForm: !state.skinForm };
    });
  };
  handleNewFormChange = evt => {
    const newSkin = { ...this.state.newSkin };
    newSkin[evt.target.name] = evt.target.value;
    this.setState({ newSkin });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/v1/skin/", this.state.newSkin).then(() => {
      this.setState({
        skinForm: false,
        newSkin: {
          name: "",
          image_url: ""
        }
      });
    });
    this.updatePage();
  };
  render() {
    let skins = this.state.skin.map(skin => {
      return (
        <div className="skin-header ">
          <div className="skin-list">
            <div className="skin-item">
              <div className="skin-desc">
                <h3>{skin.name}</h3>
              </div>
              <Link to={`/skin/${skin._id}`}>
                <img src={skin.image_url} alt={skin.name} />
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="skin-desc">Skins</h1>
        <div>
          <button onClick={this.handleToggleNewForm}>Add New Skin</button>
        </div>
        <br />
        {this.state.skinForm ? (
          <form onSubmit={this.handleSubmit}>
            <div className="skin-header">
              <label htmlFor="skin-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.newSkin.name}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="skin-header">
              <label htmlFor="skin-image">Image:</label>
              <input
                type="text"
                name="image_url"
                value={this.state.newSkin.image_url}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <input className="add-submit" type="submit" value="Create Skin" />
          </form>
        ) : (
          skins
        )}
      </div>
    );
  }
}
