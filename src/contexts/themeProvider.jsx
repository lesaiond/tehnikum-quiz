import React, { useState, useEffect, useMemo } from "react";
import { ThemeContext, themes } from "./themeContext";

export const ThemeProvider = ({ children }) => {
  const { themeValue, setThemeValue } = useState(themes.light);

  useEffect(() => {
    const persisTheme = JSON.parse(localStorage.getItem('currentTheme'));

    if (persisTheme) {
      setThemeValue(persisTheme);
    }
  }, [themeValue]);

  const toggleTheme = () => {
    setThemeValue((prevValue) => (prevValue === themes.dark ? themes.light : themes.dark));
  };

  const contextValue = useMemo(() => {
    return ({
      theme: themeValue,
      toggleTheme,
    });
  }, [themeValue, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
