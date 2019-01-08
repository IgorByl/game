import React, { Component, Fragment } from "react";
import TaskListMenu from "./../../taskListMenu/index";
import Task from "../task";
import "./index.css";

export default class TaskList extends Component {
  state = {
    isTaskVisible: false,
    task: "",
    isAnswerCorrect: null,
    topAnswer: null,
    isShowResult: null
  };

  updateTaskVisible = (isAnswerCorrect, topAnswer, isShowResult) => {
    this.setState({
      isTaskVisible: false,
      isAnswerCorrect,
      topAnswer,
      isShowResult
    });
  };

  updateTaskName = taskName => {
    this.setState({ task: taskName });
  };

  handleToggleTask = () => {
    const { isTaskVisible } = this.state.isTaskVisible;
    this.setState({
      isTaskVisible: !isTaskVisible
    });
  };

  renderTask = () => {
    const {
      isAnswerCorrect,
      topAnswer,
      isShowResult,
      isTaskVisible
    } = this.state;
    return (
      <Fragment>
        <TaskListMenu
          handleToggleTask={this.handleToggleTask}
          updateTaskName={this.updateTaskName}
        />

        {isTaskVisible && (
          <Task
            updateTaskVisible={this.updateTaskVisible}
            task={this.state.task}
            attack={this.props.attack}
            updateAttackSide={this.props.updateAttackSide}
          />
        )}
        <div>
          {isShowResult &&
            (isAnswerCorrect ? (
              <p className="trueAnswer">CORRECT!!!</p>
            ) : (
              <p className="falseAnswer">
                False!!! <span>Correct answer is: {topAnswer}</span>
              </p>
            ))}
        </div>
      </Fragment>
    );
  };
  render = () => {
    return this.renderTask();
  };
}
