import React, { Component } from "react";
import Sound from "react-sound";

export default class SoundCompanent extends Component {
  state = {
    isSoundPlaying: Sound.status.STOPPED
  };

  togglehandle = () => {
    this.setState({ isSoundPlaying: Sound.status.PLAYING });
  };

  render() {
    const { isSoundPlaying } = this.state;

    return (
      <div className="listeningTaskDivWrapper">
        <button className="playButton" onClick={this.togglehandle}>
          PLAY
        </button>
        <Sound url={this.props.url} playStatus={isSoundPlaying} />
      </div>
    );
  }
}
