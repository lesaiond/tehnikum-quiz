import React, { useState } from "react";
import { AnswerItem } from "./AnswerItem";
import { Button } from "../components/Button";

const StepFour = () => {
  const [checkedAnswer, setCheckedAnswer] = useState();

  const variants = [
    {
      id: "variant-1",
      answerLabel: "1",
    },
    {
      id: "variant-2",
      answerLabel: "2",
    },
    {
      id: "variant-3",
      answerLabel: "3",
    },
    {
      id: "variant-4",
      answerLabel: "4",
    },
    {
      id: "variant-5",
      answerLabel: "5",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>4. Занимательный вопрос</h2>
            <ul className="level-variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <Button
              id="next-btn"
              buttonType="button"
              buttonText="Далее"
              // onClick={clickHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
