import React, { Component } from "react";
import "./swordCSSAnimation.css";

export default class SwordCSSAnimation extends Component {
  constructor(props) {
    super(props);
    this.swordPlace = this.props.attackSide ? "swordEnemy" : "swordHero";
    this.state = {
      className: this.swordPlace
    };
  }

  render() {
    return (
      <div className={this.state.className}>
        <div className="topsword" />
        <div className="middlesword" />
        <div className="bottomsword" />
      </div>
    );
  }
}
