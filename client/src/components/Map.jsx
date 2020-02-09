import React, { Component } from "react";
import axios from "axios";

export default class Map extends Component {
  state = {
    map: []
  };
  updatePage = () => {
    axios.get("/api/v1/map/").then(res => {
      this.setState({ map: res.data });
      console.log(this.state.map);
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  render() {
    let maps = this.state.map.map(map => {
      return (
        <div className="map-header">
          <div className="map-item">
            <div className="map-list">
              <h1 className="map-desc">{map.name}</h1>
            </div>
            <img className="map-image" src={map.map_url} alt={map.name} />
          </div>
        </div>
      );
    });
    return maps;
  }
}
