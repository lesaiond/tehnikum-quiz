import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
// import { Input26 } from "../dz/inut25x";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
// import { MainContext } from "../test/MyContext";

const StepOne = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      stepOneValue: "",
    },
  });

  const navigate = useNavigate();

  // const { textName, setTextName } = useContext(MainContext);

  const onstepOneValue = (data) => {
    console.log("You cicked ");
    if (!inputValue) {
      setInputError(true);
    } else {
      console.log("data :", data);
      setInputError(false);
      navigate("/step-two");
      // setTextName({
      //   number: inputValue,
      // });
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <form onSubmit={handleSubmit(onstepOneValue)}>
              <Controller
                name="stepOneValue"
                control={control}
                render={({ field }) => (
                  <Input
                    inputType="tel"
                    inputName="answer"
                    hasError={inputError}
                    value={inputValue}
                    onChange={setInputValue}
                    isRequired
                    inputLabel="Ваш номер"
                    inputPlaceholder="Ваш ответ"
                    errorMessage="Введите номер в правильном формате например"
                    {...field}
                  />
                )}
              />
              <LinkButton
                id="next-btn"
                buttonType="submit"
                buttonText="Далее"
                isDisabled={false}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
