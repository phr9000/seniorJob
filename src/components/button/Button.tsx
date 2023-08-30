import React from 'react';

interface ButtonProps {
  label?: string;
  color?: 'basic' | 'red' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  disable?: boolean;
  additionalClass?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label = '버튼 라벨명', color = 'basic', size = 'md', icon, additionalClass }) => {
  let colorClass: string;
  let sizeClass: string;

  switch (color) {
    case 'red':
      colorClass = 'btn-red';
      break;

    case 'primary':
      colorClass = 'btn-blue';
      break;

    default:
      colorClass = 'btn-basic';
      break;
  }

  switch (size) {
    case 'sm':
      sizeClass = 'btn-size-s';
      break;

    case 'md':
      sizeClass = 'btn-size-m';
      break;

    case 'lg':
      sizeClass = 'btn-size-l';
      break;

    default:
      sizeClass = 'btn-size-m';
      break;
  }

  const classList = ['btn', colorClass, sizeClass, additionalClass].filter(Boolean).join(' ');

  return (
    <button className={classList}>
      {icon && <i className={icon}></i>}
      {label}
    </button>
  );
};

export default Button;