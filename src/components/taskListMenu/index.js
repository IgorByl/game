import React, { Fragment } from "react";
import "./index.css";
import taskCoreJS from "../../constants/task/coreJS";
import taskTranslateWord from "../../constants/task/taskTranslateWord";
import listeningTask from "./../../constants/task/listeningTask";
import letterOrderTask from "./../../constants/task/letterOrder";
import ballonBurst from "./../../constants/task/ballonBurst";

const TaskListMenu = props => {
  return (
    <Fragment>
      <div className="taskListMenuGrid">
        <div
          className="task"
          onClick={e => {
            props.updateTaskName(e.target.textContent);
            props.handleToggleTask();
          }}
        >
          {taskCoreJS.title}
        </div>
        <div
          className="task"
          onClick={e => {
            props.updateTaskName(e.target.textContent);
            props.handleToggleTask();
          }}
        >
          {taskTranslateWord.title}
        </div>
        <div
          className="task"
          onClick={e => {
            props.updateTaskName(e.target.textContent);
            props.handleToggleTask();
          }}
        >
          {listeningTask.title}
        </div>
        <div
          className="task"
          onClick={e => {
            props.updateTaskName(e.target.textContent);
            props.handleToggleTask();
          }}
        >
          Решение базовых арифметических уравнений
        </div>
        <div
          className="task"
          onClick={e => {
            props.updateTaskName(e.target.textContent);
            props.handleToggleTask();
          }}
        >
          {letterOrderTask.title}
        </div>
        <div
          className="task"
          onClick={e => {
            props.updateTaskName(e.target.textContent);
            props.handleToggleTask();
          }}
        >
          {ballonBurst.title}
        </div>
      </div>
    </Fragment>
  );
};

export default TaskListMenu;
