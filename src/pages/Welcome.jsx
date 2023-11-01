import React from "react";
import { Heading } from "../components/heading";
import { Heading2 } from "../25x/h2";
import { Heading3 } from "../25x/h3";
import { Heading4 } from "../25x/h4";
import { Heading5 } from "../25x/h5";
import { Heading6 } from "../25x/h6";
import { Chexbox } from "../25x/chexbox";
import { TagP } from "../25x/tagP";
import { Span } from "../25x/span";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading />
          <Heading2 />
          <Heading3 />
          <Heading4 />
          <Heading5 />
          <Heading6 />
          <Chexbox />
          <TagP />
          <Span />
          <form className="welcome__form">
            <label className="input-wrapper" htmlFor="username">
              Ваше имя
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label>
            <button disabled type="submit" id="next-btn">
              Далее
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
