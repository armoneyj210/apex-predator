import React, { Component } from "react";
import axios from "axios";

export default class Map extends Component {
  state = {
    map: []
  };
  updatePage = () => {
    axios.get("/api/v1/map").then(res => {
      this.setState({ map: res.data });
      console.log(this.state.map);
    });
  };
  render() {
    let maps = this.state.map.map(map => {
      return (
        <div className="map-header">
          <div className="map-item">
            <div className="map-list">
              <h3>{map.name}</h3>
            </div>
            <img className="map-item" src={map.map_url} alt={map.name} />
          </div>
        </div>
      );
    });
    return maps;
  }
}
