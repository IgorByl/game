import React from "react";
import taskCoreJS from "./../../constants/task/coreJS";
import "./RenderCoreJSTask.css";

const RenderCoreJsTask = props => {
  const lastQuestion = taskCoreJS.questions.pop();
  if (!lastQuestion) return <p>Choose another task category</p>;
  return (
    <div>
      <h3 className="headlineTask">{lastQuestion.question}</h3>
      {lastQuestion.listOfAnswers.map((el, ind) => (
        <p key={ind} className="answerList">
          {el.question}
          <input
            className="input"
            value={el}
            type="radio"
            name="name"
            onChange={e => props.handleOnChange(e, lastQuestion)}
          />
          {el}
        </p>
      ))}
    </div>
  );
};

export default RenderCoreJsTask;
