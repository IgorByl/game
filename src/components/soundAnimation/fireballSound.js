import React, { Component } from "react";
import Sound from "react-sound";
import soundfile from "./../../audio/attack/fireball.mp3";

export default class FireballSound extends Component {
  changePlayingStatus = () => {
    this.props.setPlayingStatus(false);
  };

  render = () => {
    return (
      <Sound
        url={soundfile}
        playStatus={Sound.status.PLAYING}
        onFinishedPlaying={this.changePlayingStatus}
      />
    );
  };
}
