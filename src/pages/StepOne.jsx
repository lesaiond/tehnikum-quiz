import React, { useState } from "react";
// import { Input26 } from "../dz/inut25x";
import { Button } from "../components/Button";
import { Input } from "../components/input";

const StepOne = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const clickHandler = () => {
    if (!inputValue) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
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
            <Button
              id="next-btn"
              buttonType="button"
              buttonText="Далее"
              onClick={clickHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
