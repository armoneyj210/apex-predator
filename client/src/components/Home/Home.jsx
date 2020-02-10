import React, { Component } from "react";
import video from "../Home/mylivewallpapers.com-Apex-Legends-Banner.mp4";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <video autoPlay mute loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="home-container">
          <div>
            <h1 className="home-header">
              Do you want to become an Apex Legend?
            </h1>
            <h1 className="home-header2">Don't know where to begin?</h1>
            <h1 className="home-header3">Let us help you get started!</h1>
          </div>

          <div>
            <a href="/character">
              <button className="home-cta">Become a Legend!</button>
            </a>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
