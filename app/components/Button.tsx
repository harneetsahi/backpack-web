import React from "react";

interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  name?: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <button
        onClick={props.onClick}
        name={props.name}
        className={`${props.className} rounded-lg cursor-pointer  `}
      >
        {props.icon}
        {props.text}
      </button>
    </>
  );
}

export default Button;
