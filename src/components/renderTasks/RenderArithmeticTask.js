import React from "react";

const RenderArithmeticTask = props => {
  const randomInteger = (min, max) => {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
  const sign = ["+", "-", "*", "/"][randomInteger(0, 3)];
  let secondArgument = null;

  sign === "/"
    ? (secondArgument = randomInteger(1, 2))
    : (secondArgument = randomInteger(0, 20));

  const firstArgument = randomInteger(0, 20);
  const lastQuestion = {
    // eslint-disable-next-line
    correctAnswer: [eval(`${firstArgument}${sign}${secondArgument}`)]
  };
  return (
    <div>
      <h2 className="headlineTask">Решите арифметическое уравнение:</h2>
      <h3 className="headlineTask">
        {firstArgument}
        {sign}
        {secondArgument} = ?
      </h3>
      <input
        type="text"
        onChange={e => props.handleOnChange(e, lastQuestion)}
      />
    </div>
  );
};

export default RenderArithmeticTask;
