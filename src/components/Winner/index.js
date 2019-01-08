import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Winner = props => {
  return (
    <Fragment>
      <h2 className="winner">{props.battleRes}</h2>
      <Link
        className="lincAfterEnd"
        onClick={() => this.forceUpdate()}
        to="/registration"
      >
        <button className="lincButton">TRY AGAIN</button>
      </Link>
    </Fragment>
  );
};

export default Winner;
