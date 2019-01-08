import React, { Fragment } from "react";
import "./index.css";
import { sortBy } from "lodash";

const Scoreboard = props => {
  const sortlistOfAllUsers = param => {
    return sortBy(param, [
      function(o) {
        return o.score;
      }
    ]).reverse();
  };

  console.log(props.listOfAllUsers);

  return (
    <Fragment>
      <div>
        <span className="scoreboardTitle">Name</span> :{" "}
        <span className="scoreboardTitle">Result</span>
      </div>
      <ul className="ulList">
        {sortlistOfAllUsers(props.listOfAllUsers).map((elem, index) => (
          <li className="listOfUsers" key={index}>
            {elem.userName} : {elem.score}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Scoreboard;
