import React from "react";

export const Input26 = ({
  isRequired,
  inputType,
  inputName,
  inputPlaceholder,
  errorMessage,
}) => {
  return (
    <label className="input-wrapper">
      <input
        required={isRequired}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
      />
      <span id="error-message">{errorMessage}</span>
    </label>
  );
};
