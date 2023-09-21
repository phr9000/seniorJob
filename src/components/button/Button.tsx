import React from "react";

interface ButtonProps {
  label?: string;
  color?: "basic" | "red-line" |  "primary-line" | "red-fill" |"primary-fill";
  size?: "sm" | "md" | "lg" | "full";
  icon?: string;
  disable?: boolean;
  additionalClass?: string;
  children?: React.ReactNode;
  onClick?: ()=> void;
}

const Button: React.FC<ButtonProps> = ({
  label = "버튼 라벨명",
  color = "basic",
  size = "md",
  icon,
  additionalClass,
  onClick
}) => {
  let colorClass: string;
  let sizeClass: string;

  switch (color) {
    case "red-line":
      colorClass = "btn-red-line";
      break;

    case "primary-line":
      colorClass = "btn-primary-line";
      break;  

    case "red-fill":
      colorClass = "btn-red-fill";
      break;  

    case "primary-fill":
      colorClass = "btn-blue-fill";
      break;

    default:
      colorClass = "btn-basic";
      break;
  }

  switch (size) {
    case "sm":
      sizeClass = "btn-size-s";
      break;

    case "md":
      sizeClass = "btn-size-m";
      break;

    case "lg":
      sizeClass = "btn-size-l";
      break;

    case "full":
      sizeClass = "btn-full";
      break;

    default:
      sizeClass = "btn-size-m";
      break;
  }

  const classList = ["btn", colorClass, sizeClass, additionalClass]
    .filter(Boolean)
    .join(" ");

  const handleClick = () => {
    console.log(onClick);
    if(onClick) {
      onClick();
    }
  };  

  return (
    <button className={classList} onClick={handleClick}>
      {icon && <i className={icon}></i>}
      {label}
    </button>
  );
};

export default Button;
