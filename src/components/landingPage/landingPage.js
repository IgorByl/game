import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";
import logo from "./../../images/logo/gameLogo.png";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingPageWrapper">
        <img className="logo" src={logo} alt="game logo" />
        <button className="startButton">
          <Link to="/registration" className="linc">START</Link>
        </button>
      </div>
    );
  }
}
