"use client"
import React, {
  useState,
  createContext,
  useEffect,
} from "react";

interface ContextProps {
  readonly darkMode?: boolean;
  readonly setDarkMode: (darkMode: boolean) => void;
}

export const ThemeContext = createContext<ContextProps>({
  darkMode: false,
  setDarkMode: () => null,
});

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  const [darkMode, setDarkMode] = useState(false);

  const setThemeDarkMode = (darkMode: boolean) => {
    document.body.style.backgroundColor = darkMode ? "#000" : "#FFF";
    setDarkMode(darkMode);
  };

  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    setThemeDarkMode(isDarkMode);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode: setThemeDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
