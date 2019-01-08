import React, { Component } from "react";
import Sound from "react-sound";
import soundfile from "./../../audio/attack/explosion.mp3";

export default class FireballExplosion extends Component {
  render = () => {
    return <Sound url={soundfile} playStatus={Sound.status.PLAYING} />;
  };
}
