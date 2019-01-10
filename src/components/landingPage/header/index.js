import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "./../../../images/logo/gameLogo.png";

const Header = () => {
  return (
    <div className="headerWrapper">
      <h1 className="headerMainLogo">
        <img className="logo" src={logo} alt="World of JavaScript" />
      </h1>
      <h2 className="h2TextGreetings">Greetings wanderer! Welcome to WOJS!</h2>
      <div className="startButton">
        <Link to="/registration" className="linc">
          JOIN
        </Link>
      </div>
      <p className="pHeaderText">
        Join us! There is only one chance to become a hero...
      </p>
    </div>
  );
};

export default Header;
