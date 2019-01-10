import React, { Component, Fragment } from "react";
import Sound from "react-sound";
import soundfileSword from "./../../audio/attack/sword.mp3";
import soundfileWind from "./../../audio/attack/windOfSwords.mp3";

export default class SwordSound extends Component {
  changePlayingStatus = () => {
    this.props.setPlayingStatus(false);
  };

  render = () => {
    return (
      <Fragment>
        <Sound
          url={soundfileWind}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={this.changePlayingStatus}
        />
        <Sound url={soundfileSword} playStatus={Sound.status.PLAYING} />
      </Fragment>
    );
  };
}
