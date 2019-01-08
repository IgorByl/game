import React, { Component, Fragment } from "react";
import Scoreboard from "./../Scoreboard/index";

export default class ModalWindowRegistration extends Component {
  state = {
    isVisible: false
  };

  toggleModal = () => {
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible
    });
  };

  render = () => {
    const { isVisible } = this.state;
    return (
      <Fragment>
        <div>
          <button className= 'chooseButton' onClick={this.toggleModal}>Scoreboard</button>
        </div>
        {isVisible && (
          <div className="modalScore">
            <Scoreboard listOfAllUsers={this.props.listOfAllUsers} />
            <button className= 'chooseButton' onClick={this.toggleModal}>close</button>
          </div>
        )}
      </Fragment>
    );
  };
}
