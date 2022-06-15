import { useTheme } from "@helpers/ThemeContext";
import React from "react";

export const Logo = () => {
  const { darkMode } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="none"
      viewBox="0 0 49 49"
    >
      <circle cx="24.5" cy="25.5" r="14" />
      <circle
        stroke={darkMode ? "#FFF" : "#000"}
        strokeWidth={3}
        cx="24.5"
        cy="25.5"
        r="17.3"
      />
      <path
        fill={darkMode ? "#FFF" : "#000"}
        d="m17.8 26.6v5.4h-1.5v-14h1.5v5.9l3.7-5.9h1.7l-3.8 6 4.1 8h-1.7l-3.3-6.5zm15.1 2.7q0 3-3.6 3-3.7 0-3.7-3v-1.9h1.5v1.9q0 0.8 0.6 1.3 0.5 0.4 1.6 0.4 1 0 1.6-0.4 0.5-0.5 0.5-1.2 0-0.8-0.2-1.2-0.1-0.4-0.6-0.9l-3.8-3.8q-0.7-0.6-0.9-1.2-0.3-0.7-0.3-1.7 0-1.4 0.9-2.2 0.9-0.8 2.7-0.8 3.5 0 3.5 3v1.9h-1.5v-2q0-0.7-0.5-1.2-0.5-0.4-1.5-0.4-1.1 0-1.6 0.4-0.5 0.5-0.5 1.2 0 0.8 0.2 1.2 0.1 0.4 0.7 0.9l3.8 3.7q0.6 0.7 0.9 1.4 0.2 0.6 0.2 1.6z"
      />
    </svg>
  );
};
