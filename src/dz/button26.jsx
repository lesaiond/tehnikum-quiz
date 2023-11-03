import React from "react";

export const Button26 = ({
  buttonType,
  buttonText,
  isDissabled,
  id,
}) => {
  return (
    <button
      id={id}
      disabled={isDissabled}
      type={buttonType === 'submit' ? 'submit' : 'button'}
    >
      {buttonText}
    </button>
  );
};
