import React, { Component } from "react";
import axios from "axios";

export default class SingleSkin extends Component {
  state = {
    skin: {
      name: "",
      image_url: ""
    }
  };
  updatePage = () => {
    axios.get(`/api/v1/skin/${this.props.match.params.skinId}/`).then(res => {
      this.setState({ skin: res.data });
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  render() {
    return (
      <div>
        <div>
          <h1 className="skin-desc">{this.state.skin.name}</h1>
        </div>
        <img
          className="skin-img"
          src={this.state.skin.image_url}
          alt={this.state.skin.name}
        />
      </div>
    );
  }
}
