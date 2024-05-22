import React, { SetStateAction } from "react";

const Counter: React.FC<{
  counter: number;
  handleAddition: () => void;
  handleSubtraction: () => void;
  onChange: React.Dispatch<SetStateAction<number>>;
}> = ({ counter, handleAddition, handleSubtraction, onChange }) => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(event.target.value);
    if (isNaN(numberValue)) {
      onChange(0);
    } else {
      onChange(numberValue);
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleSubtraction}>-</button>
      <input defaultValue={0} value={counter} onChange={handleChangeInput} />
      <button onClick={handleAddition}>+</button>
    </div>
  );
};

export default Counter;
