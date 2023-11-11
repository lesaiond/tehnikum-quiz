import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerItem3 } from "../components/AnswerItem3";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";

const StepThree = () => {
  const [checkedAnswer, setCheckedAnswer] = useState();
  const [answerError, setAnswerError] = useState();

  const navigate = useNavigate();

  const variants = [
    {
      id: "variant-1",
      src: "./img/laugh.png",
      alt: "laugh",
      text: "Ваш ответ 1",
    },
    {
      id: "variant-2",
      src: "./img/hearts.png",
      alt: "hearts",
      text: "Ваш ответ 2",
    },
    {
      id: "variant-3",
      src: "./img/smirk.png",
      alt: "smirk",
      text: "Ваш ответ 3",
    },
    {
      id: "variant-4",
      src: "./img/fright.png",
      alt: "fright",
      text: "Ваш ответ 4",
    },
  ];

  const clickHandler = () => {
    if (!checkedAnswer) {
      setAnswerError("choose any radio");
    } else {
      navigate('/step-four');
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <h2>3. Занимательный вопрос</h2>
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <AnswerItem3
                  id={elem.id}
                  isSrc={elem.src}
                  isAlt={elem.alt}
                  textP={elem.text}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
              {answerError && <span id="error-message" style={{ color: "red" }}>{answerError}</span>}
            </ul>
            <LinkButton
              // path="/step-four"
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

export default StepThree;
