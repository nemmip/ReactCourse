import React from "react";

const StepMessage: React.FC<{
  step: number;
  children: React.ReactNode;
}> = ({ step, children }) => {
  return (
    <p className="message">
      Step {step}: {children}
    </p>
  );
};

export default StepMessage;
