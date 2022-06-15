import React, { FC } from "react";

interface IconProps {
  className?: string;
}

export const DarkMode: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path
          d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
};
