import React, { useState } from "react";
import Counter from "./Counter.tsx";
import DateCalculation from "./DateCalculation.tsx";

const DateCounter: React.FC = () => {
  const [stepCounter, setStepCounter] = useState(1);
  const [counter, setCounter] = useState(0);

  const handleStepAddition = () => {
    setStepCounter((c) => c + 1);
  };

  const handleStepSubstraction = () => {
    setStepCounter((c) => c - 1);
  };

  const handleCounterAddition = () => {
    setCounter((c) => c + stepCounter);
  };

  const handleCounterSubstraction = () => {
    setCounter((c) => c - stepCounter);
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
      <Counter
        title="Step"
        counter={stepCounter}
        handleAddition={handleStepAddition}
        handleSubtraction={handleStepSubstraction}
      />
      <Counter
        title="Count"
        counter={counter}
        handleSubtraction={handleCounterSubstraction}
        handleAddition={handleCounterAddition}
      />
      <DateCalculation counter={counter} />
    </div>
  );
};

export default DateCounter;
