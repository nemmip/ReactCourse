import React from "react";

const Counter: React.FC<{
  title: string;
  counter: number;
  handleAddition: () => void;
  handleSubtraction: () => void;
}> = ({ title, counter, handleAddition, handleSubtraction }) => {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleSubtraction}>-</button>
      <h4>
        {title}: {counter}
      </h4>
      <button onClick={handleAddition}>+</button>
    </div>
  );
};

export default Counter;
