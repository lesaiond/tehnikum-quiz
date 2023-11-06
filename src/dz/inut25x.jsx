import React from "react";

export const Input26 = ({
  id,
  isRequired,
  inputType,
  inputName,
  inputPlaceholder,
  errorMessage,
  onChange,
  hasError,
}) => {
  return (
    <label className={`input-wrapper ${hasError && '_error'}`} htmlFor={id}>
      <input
        required={isRequired}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {hasError && <span id="error-message">{errorMessage}</span>}
    </label>
  );
};
