import React from "react";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  customFunc,
}) => {
  const handleClick = customFunc || (() => {});

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-2 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      onClick={handleClick}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
