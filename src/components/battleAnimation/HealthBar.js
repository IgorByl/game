import React, { Component } from "react";
import "./HealthBar.css";

export default class HealthBar extends Component {
  componentDidMount() {
    this.drawPoligon();
  }

  componentDidUpdate = prevProps => {
    if (this.props.isAudioPlaying === false) {
      this.drawPoligon();
    }
  };

  drawPoligon = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.clearRect(0, 0, 300, 30);
    ctx.fillRect(`${this.props.health}`, 0, 300, 30);
  };

  render() {
    return (
      <canvas
        className={this.props.className}
        ref="canvas"
        width={300}
        height={30}
      />
    );
  }
}
