// import { createContext, useReducer } from "react";
import React from "react";
import { useEffect } from "react";
import { ToggleThemeToDark, ToggleThemeToLight } from "../scripts";
import { useSelector } from "react-redux";

const ThemeProvider = (props) => {
  const isDark = useSelector((state) => state.theme.isDark);

  // darkMode durumuna bağlı olarak renk değişikliği
  useEffect(() => {
    // if (state.darkMode) {
    if (isDark) {
      // dark mode renk degerleri:
      ToggleThemeToDark();
    } else {
      // default renk degerlerine donus:
      ToggleThemeToLight();
    }
  }, [isDark]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default ThemeProvider;
