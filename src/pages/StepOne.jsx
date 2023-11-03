import React from "react";
import { Input26 } from "../dz/inut25x";
import { Button26 } from "../dz/button26";

const StepOne = () => {
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
            <Input26
              isRequired
              inputType="text"
              inputPlaceholder="Ваш ответ"
              inputName="answer"
              errorMessage="Введите номер в правильном формате например"
            />
            {/* <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label> */}
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
            <Button26 buttonType="type" buttonText="Далее" id="next-btn" isDissabled="disabled" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
