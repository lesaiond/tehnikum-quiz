import React from "react";

export const Button = ({ buttonType, buttonText, isDissabled }) => {
  return (
    <button
      disabled={isDissabled}
      type={buttonType === 'submit' ? 'submit' : 'button'}
    >
      {buttonText}
    </button>
  );
};
