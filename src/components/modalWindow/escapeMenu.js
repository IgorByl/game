import React from "react";
import { Link } from "react-router-dom";

const RenderEscapeMenu = () => {
  const battleMenu = [["New Game", "/registration"], ["Exit", "/"]];
  return (
    <nav>
      <ul>
        {battleMenu.map((value, index) => {
          return (
            <Link
              key={index}
              className="linc"
              onClick={() => this.forceUpdate()}
              to={value[1]}
            >
              <button className="lincButton">{value[0]} </button>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
export default RenderEscapeMenu;
