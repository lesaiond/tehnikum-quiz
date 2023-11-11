import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";

const StepTwo = () => {
  const variants = [
    {
      id: "variant-1",
      answerLabel: "Ответ №1",
    },
    {
      id: "variant-2",
      answerLabel: "Ответ №2",
    },
    {
      id: "variant-3",
      answerLabel: "Ответ №3",
    },
    {
      id: "variant-4",
      answerLabel: "Ответ №4",
    },
  ];

  const navigate = useNavigate();
  const [selectedRadio, setSelectedRadio] = useState("");
  const [error, setError] = useState("");

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const handleCheckRadio = () => {
    if (!selectedRadio) {
      setError("Пожалуйста, выберите радио");
    } else {
      navigate("/step-three");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  checked={selectedRadio === elem.id}
                  onChange={handleRadioChange}
                  c
                />
              ))}
              {error && <span id="error-message" style={{ color: 'red' }}>{error}</span>}
            </ul>
            <LinkButton
              id="next-btn"
              buttonType="button"
              buttonText="Далее"
              isDisabled={false}
              onClick={handleCheckRadio}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
