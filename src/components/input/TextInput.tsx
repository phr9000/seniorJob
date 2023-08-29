import React, { useState } from "react";
import "src/assets/styles/base/input.scss";
interface InputExampleProps {
  inputClassName: 'btn' | 'pink';
  value: string;
  placeholder: string;
}

const InputExample: React.FC<InputExampleProps> = ({ inputClassName, value, placeholder }) => {
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
        placeholder={placeholder} 
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputExample;