import React, { Component, Fragment } from "react";
import ballonBurst from "./../../constants/task/ballonBurst";
import "./RenderBallonBurstTask.css";
import SoundCompanent from "../renderTasksComponents/SoundCompanent";

export default class RenderBallonBurstTask extends Component {
  chooseLetter = (e, answer) => {
    if (e.target.parentNode.children.length === 1) {
      e.target.parentNode.className = "burst";
      answer.push(e.target.parentNode.textContent);
    }
  };

  chooseResult = () =>
    new Promise(res => {
      res();
    });

  render() {
    const answer = [];
    const lastQuestion = ballonBurst.questions.pop();
    if (!lastQuestion) return <p>Choose another task category</p>;
    return (
      <Fragment>
        <div className="container">
          <div className="balloon" onClick={e => this.chooseLetter(e, answer)}>
            {lastQuestion.listOfAnswers.map((el, ind) => (
              <div key={ind}>
                <span className="spanLetterSize">{el}</span>
              </div>
            ))}
          </div>
          <button
            className="chooseButton"
            onClick={() => {
              this.chooseResult()
                .then(() => {
                  this.props.handleOnChange(answer.join(""), lastQuestion);
                })
                .then(() => {
                  this.props.handleCheck();
                });
            }}
          >
            CHECK RESULT
          </button>
          <SoundCompanent url={lastQuestion.audio} />
        </div>
      </Fragment>
    );
  }
}
