import React from "react";
import "./index.css";

export default class EnemyFigure extends React.Component {
  state = {
    className: null
  };

  componentDidMount() {
    this.setState({ className: "levelcountIn" });
    setTimeout(() => {
      this.setState({ className: "levelcountOut" });
    }, 4000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.enemyBody.level !== prevProps.enemyBody.level) {
      this.setState({ className: "levelcountIn" });
      setTimeout(() => {
        this.setState({ className: "levelcountOut" });
      }, 4000);
    }
  }

  render() {
    const { className } = this.state;
    return (
      <div>
        <p className={className}>{this.props.enemyBody.level}</p>
        <img
          className="vert-unmove"
          src={this.props.enemyBody.body}
          alt="body"
        />
        <img className="vert-move" src={this.props.enemyBody.head} alt="head" />
        <img
          className="vert-move"
          src={this.props.enemyBody.lefthand}
          alt="lefthand"
        />
        <img
          className="vert-move"
          src={this.props.enemyBody.righthand}
          alt="righthand"
        />
      </div>
    );
  }
}
