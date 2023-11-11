import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Heading } from "../components/heading";
import { Button } from "../components/Button";
import { Input } from "../components/input";

import { ThemeContext, themes } from "../contexts/themeContext";

const Welcome = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const { theme } = useContext(ThemeContext);

  const goNextPage = () => {
    if (nameValue && phoneValue) {
      navigate('/step-one');
    }
  };

  const validateName = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const validatePhone = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const handleNameInput = (value) => {
    setNameValue(value);
    validateName();
  };

  const handlePhoneInput = (value) => {
    setPhoneValue(value);
    validatePhone();
  };

  const clickHandler = () => {
    validateName();
    validatePhone();

    goNextPage();
  };

  return (
    <div className={`container ${theme === themes.dark && '_dark'}`}>
      <div className="wrapper">
        <div className="welcome">
          {/* <button onClick={}></button> */}
          <Heading
            text="Добро пожаловать в квиз от лучшего учебного центра"
            headingType="h1"
          />
          <form className="welcome__form">
            <Input
              hasError={nameError}
              value={nameValue}
              onChange={(value) => handleNameInput(value)}
              id="usernam e"
              isRequired
              inputLabel="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />
            <Input
              hasError={phoneError}
              value={phoneValue}
              onChange={(value) => handlePhoneInput(value)}
              id="phone"
              isRequired
              inputLabel="Ваш номер"
              inputPlaceholder="+998 9- --- -- -- "
              errorMessage="Введите номер в правильном формате"
            />
            <Button buttonType="button" buttonText="Далее" onClick={clickHandler} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
