import React, { Component } from "react";
import "./fireballCanvas.css";

export default class FireballCanvas extends Component {
  constructor(props) {
    super(props);
    this.flyDirection = this.props.attackSide ? 10 : 790;
    this.interval = null;
    this.frameID = null;
    this.state = {
      x: this.flyDirection,
      y: 100
    };
  }

  componentDidMount() {
    this.fireballLoop();
    setTimeout(this.stopLoop, 2300);
  }

  componentWillUnmount() {
    this.stopLoop();
  }

  fireballLoop = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 750, 200);
    let { x, y } = this.state;

    this.setState({ x: this.props.attackSide ? (x += 7) : (x -= 7) });

    const dx = 40;
    const dy = 40;
    const limit = 60;
    const radii = [];

    function length(x, y) {
      return Math.sqrt(x * x + y * y);
    }

    let mouse_pos_x = x;
    let mouse_pos_y = y;

    let grd = ctx.createRadialGradient(
      mouse_pos_x,
      mouse_pos_y,
      5,
      mouse_pos_x,
      mouse_pos_y,
      120
    );
    grd.addColorStop(0, "rgba(255,255,0,1)");
    grd.addColorStop(1, "rgba(255,0,0,0.1)");
    ctx.fillStyle = grd;

    ctx.beginPath();
    ctx.arc(mouse_pos_x, mouse_pos_y, 90, 0, 5 * Math.PI);
    ctx.fill();

    for (let i = 0; i < canvas.width / dx; i++) {
      for (let j = 0; j < canvas.height / dy; j++) {
        let idx = j * Math.round(canvas.width / dx) + i;
        let distance = length(i * dx - mouse_pos_x, j * dy - mouse_pos_y);
        if (distance < limit) {
          radii[idx] = limit - distance;
        } else {
          radii[idx] = Math.max(0, radii[idx] - 0.5);
        }
        if (radii[idx] > 0) {
          let red = 255 - Math.round(distance);
          let green = 120 - Math.round(distance);
          let blue = 20 - Math.round(distance);
          ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
          ctx.beginPath();
          ctx.arc(i * dx, j * dy, radii[idx], 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    }

    this.interval = requestAnimationFrame(this.fireballLoop);
  };

  stopLoop = () => {
    cancelAnimationFrame(this.interval);
  };

  render() {
    return <canvas className="canvas" ref="canvas" width={750} height={200} />;
  }
}
