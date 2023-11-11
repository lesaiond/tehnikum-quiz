import React, { useState } from "react";
// import { Input26 } from "../dz/inut25x";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const navigate = useNavigate();

  const clickHandler = () => {
    if (!inputValue) {
      setInputError(true);
    } else {
      setInputError(false);
      navigate('/step-two');
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <Input
              inputType="text"
              inputName="answer"
              hasError={inputError}
              value={inputValue}
              onChange={setInputValue}
              isRequired
              inputLabel="Ваш номер"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите номер в правильном формате например"
            />
            <LinkButton
              id="next-btn"
              buttonType="button"
              buttonText="Далее"
              isDisabled={false}
              onClick={clickHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
