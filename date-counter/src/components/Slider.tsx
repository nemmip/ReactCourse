import React, { SetStateAction } from "react";

const Slider: React.FC<{
  counter: number;
  onChange: React.Dispatch<SetStateAction<number>>;
}> = ({ counter, onChange }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        max={10}
        value={counter}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <h3>{counter}</h3>
    </div>
  );
};

export default Slider;
