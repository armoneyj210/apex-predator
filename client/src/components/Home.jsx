import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div>
            <h1 className="home-header">
              Do you want to become an Apex Legend?
            </h1>
          </div>

          <div>
            <a href="/character">
              <button className="home-cta">Get Started</button>
            </a>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
