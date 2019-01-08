import React from "react";
import Sortable from "./../../components/renderTasksComponents/Sortable";
import letterOrderTask from "../../constants/task/letterOrder";
import "./../renderTasksComponents/index.css";

const RenderLetterOrderTask = props => {
  const lastQuestion = letterOrderTask.questions.pop();
  if (!lastQuestion) return <p>Choose another task category</p>;
  return (
    <div className="taskDivWrapper">
      <Sortable
        handleOnChange={props.handleOnChange}
        opacity={0.8}
        data={lastQuestion}
      />
    </div>
  );
};

export default RenderLetterOrderTask;
