import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";

const StepFour = () => {
  const [checkedAnswer, setCheckedAnswer] = useState();
  const [answerError, setAnswerError] = useState();

  const navigate = useNavigate();

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

  const clickHandler = () => {
    if (!checkedAnswer) {
      setAnswerError("choose any radio");
    } else {
      navigate("/thanks");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} />
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
            {answerError && <span style={{ color: "red" }}>{answerError}</span>}
            <LinkButton
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

export default StepFour;
