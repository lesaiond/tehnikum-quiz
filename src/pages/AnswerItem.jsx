import React from "react";

export const AnswerItem = (id, answerLabel) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name={id} id={id} />
      <label htmlFor={id}>{answerLabel}</label>
    </li>
  );
};
