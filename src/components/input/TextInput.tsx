import React, { useState } from "react";
interface InputExampleProps {
  inputClassName?: "pink";
  value?: string | "";
  placeholder?: string;
  icon?: string;
  type? :string;
}

const InputExample: React.FC<InputExampleProps> = ({
  inputClassName = "input",
  value = "",
  placeholder,
  icon,
  type="text"
}) => {
  let [isInputClicked, setIsInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {icon && <i className={icon}></i>}
      <input
        type={type}
        value={inputValue}
        className={inputClassName}
        placeholder={isInputClicked === true ? "" : placeholder}
        onChange={handleInputChange}
        onFocus={() => {
          setIsInputClicked(true);
        }}
        onBlur={() => {
          setIsInputClicked(false);
        }}
      />
    </div>
  );
};

export default InputExample;
