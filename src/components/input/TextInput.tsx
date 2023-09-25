import React, { useState } from "react";
interface InputExampleProps {
  inputClassName?: "pink";
  value?: string | "";
  placeholder?: string;
}

const InputExample: React.FC<InputExampleProps> = ({
  inputClassName = "input",
  value = "",
  placeholder,
}) => {
  let [isInputClicked, setIsInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
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
