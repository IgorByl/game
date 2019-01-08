import React, { Component } from "react";
import "./index.css";
import { tasksStringData } from "./../../../constants/constants";
import RenderCoreJsTask from "./../../renderTasks/RenderCoreJsTask";
import RenderTranslateWordTask from "./../../renderTasks/RenderTranslateWordTask";
import RenderListeningTask from "./../../renderTasks/RenderListeningTask";
import RenderArithmeticTask from "./../../renderTasks/RenderArithmeticTask";
import RenderLetterOrderTask from "./../../renderTasks/RenderLetterOrderTask";
import RenderBallonBurstTask from "./../../renderTasks/RenderBallonBustTask";

export default class Task extends Component {
  state = {
    answer: null,
    isAnswerCorrect: false,
    topAnswer: null
  };

  shouldComponentUpdate = (nextProps, nextState) =>
    this.state.isShowResult !== nextState.isShowResult;

  handleOnChange = (e, lastQuestion) => {
    if (typeof e === "string") {
      if (lastQuestion.correctAnswer.some(elem => elem === e)) {
        this.setState({ isAnswerCorrect: true });
      } else {
        this.setState({
          isAnswerCorrect: false,
          topAnswer: lastQuestion.correctAnswer[0]
        });
      }
    } else {
      if (
        lastQuestion.correctAnswer.some(elem => [] + elem === e.target.value)
      ) {
        this.setState({ isAnswerCorrect: true });
      } else {
        this.setState({
          isAnswerCorrect: false,
          topAnswer: lastQuestion.correctAnswer[0]
        });
      }
    }
  };

  handleCheck = () => {
    const { isAnswerCorrect } = this.state;
    const { attack } = this.props;
    this.setState({ isShowResult: true }, () =>
      this.props.updateTaskVisible(
        this.state.isAnswerCorrect,
        this.state.topAnswer,
        this.state.isShowResult
      )
    );

    this.props.updateAttackSide(isAnswerCorrect);

    setTimeout(() => {
      if (isAnswerCorrect) {
        attack("enemy");
      } else {
        attack("user");
      }
    }, 5000);
  };

  switchTheTask = () => {
    switch (this.props.task) {
      case tasksStringData.CoreJS_Question:
        return <RenderCoreJsTask handleOnChange={this.handleOnChange} />;
      case tasksStringData.Translate_Question:
        return <RenderTranslateWordTask handleOnChange={this.handleOnChange} />;
      case tasksStringData.Listening_Question:
        return <RenderListeningTask handleOnChange={this.handleOnChange} />;
      case tasksStringData.ArithmeticTask_Question:
        return <RenderArithmeticTask handleOnChange={this.handleOnChange} />;
      case tasksStringData.LetterOrderTask_Question:
        return <RenderLetterOrderTask handleOnChange={this.handleOnChange} />;
      case tasksStringData.BallonBurstTask_Question:
        return (
          <RenderBallonBurstTask
            handleOnChange={this.handleOnChange}
            handleCheck={this.handleCheck}
          />
        );
      default:
        break;
    }
  };

  render() {
    return (
      <div className="modalWindowQuestion">
        {this.switchTheTask()}
        <button className="chooseButton" onClick={() => this.handleCheck()}>
          Acept
        </button>
      </div>
    );
  }
}
