import React, { Component } from "react";
import "./healCanvas.css";

export default class HealCanvas extends Component {
  constructor(props) {
    super(props);
    this.healPlace = this.props.attackSide ? "canvasHero" : "canvasEnemy";
    this.interval = null;
    this.state = {
      className: this.healPlace
    };
  }

  componentDidMount() {
    this.fireballLoop();
    setTimeout(this.stopLoop, 4000);
  }

  componentWillUnmount() {
    this.stopLoop();
  }

  fireballLoop = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    var init = [];
    var maxParts = 500;
    for (let a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      });
    }

    var particles = [];
    for (let b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }
    ctx.clearRect(0, 0, w, h);
    for (let c = 0; c < particles.length; c++) {
      var p = particles[c];
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
      ctx.stroke();
    }
    this.interval = requestAnimationFrame(this.fireballLoop);
  };

  stopLoop = () => {
    cancelAnimationFrame(this.interval);
  };

  render() {
    return (
      <canvas
        className={this.state.className}
        ref="canvas"
        width={300}
        height={450}
      />
    );
  }
}
