import React, { useState } from "react";
import Counter from "./Counter.tsx";
import DateCalculation from "./DateCalculation.tsx";
import Slider from "./Slider.tsx";

const DateCounter: React.FC = () => {
  const [stepCounter, setStepCounter] = useState(1);
  const [counter, setCounter] = useState(0);

  const handleCounterAddition = () => {
    setCounter((c) => c + stepCounter);
  };

  const handleCounterSubstraction = () => {
    setCounter((c) => c - stepCounter);
  };

  const handleResetState = () => {
    setCounter(0);
    setStepCounter(1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        width: "100%",
      }}
    >
      <Slider counter={stepCounter} onChange={setStepCounter} />
      <Counter
        counter={counter}
        handleSubtraction={handleCounterSubstraction}
        handleAddition={handleCounterAddition}
        onChange={setCounter}
      />
      <DateCalculation counter={counter} />
      {(stepCounter !== 1 || counter !== 0) && (
        <button onClick={handleResetState}>Reset</button>
      )}
    </div>
  );
};

export default DateCounter;
