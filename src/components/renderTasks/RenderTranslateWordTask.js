import React from "react";
import taskTranslateWord from "./../../constants/task/taskTranslateWord";

const RenderTranslateWordTask = props => {
  const lastQuestion = taskTranslateWord.questions.pop();
  if (!lastQuestion) return <p>Choose another task category</p>;
  return (
    <div>
      <h3 className="headlineTask">{lastQuestion.question}</h3>
      <input
        type="text"
        onChange={e => props.handleOnChange(e, lastQuestion)}
      />
    </div>
  );
};

export default RenderTranslateWordTask;
