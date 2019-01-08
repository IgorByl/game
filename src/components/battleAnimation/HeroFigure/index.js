import React from "react";
import "./hero.css";
import body from "./../../../images/models/hero/body.png";
import head from "./../../../images/models/hero/head.png";
import lefthand from "./../../../images/models/hero/lefthand.png";
import righthand from "./../../../images/models/hero/righthand.png";

const HeroFigure = () => (
  <div>
    <img className="vert-unmove-h" src={body} alt="hero body" />
    <img className="vert-move-h" src={head} alt="hero head" />
    <img className="vert-move-h" src={lefthand} alt="hero lefthand" />
    <img className="vert-move-h" src={righthand} alt="hero righthand" />
  </div>
);

export default HeroFigure;