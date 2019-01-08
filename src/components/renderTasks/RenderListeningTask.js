import React, { Component } from "react";
import listeningTask from "./../../constants/task/listeningTask";
import SoundCompanent from "../renderTasksComponents/SoundCompanent";

export default class RenderListeningTask extends Component {
  shouldComponentUpdate = () => {
    return false;
  };
  render() {
    const lastQuestion = listeningTask.questions.pop();
    if (!lastQuestion) return <p>Choose another task category</p>;
    return (
      <div className="listeningTaskDivWrapper">
        <SoundCompanent url={lastQuestion.audio} />
        <input
          type="text"
          onChange={e => this.props.handleOnChange(e, lastQuestion)}
        />
      </div>
    );
  }
}
