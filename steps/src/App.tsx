import React, { useState } from "react";
import Button from "./components/Button.tsx";
import StepMessage from "./components/StepMessage.tsx";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const buttonStyle = {
  backgroundColor: "#7950F2",
  color: "white",
};
const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleButtonClick = (type: string) => {
    if (type === "previous" && step > 1) {
      setStep((s) => s - 1);
    } else if (type === "next" && step < 3) {
      setStep((s) => s + 1);
    }
  };

  const handleCloseButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button className="close" onClick={handleCloseButton}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              bgColor={buttonStyle.backgroundColor}
              textColor={buttonStyle.color}
              onClick={() => handleButtonClick("previous")}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              bgColor={buttonStyle.backgroundColor}
              textColor={buttonStyle.color}
              onClick={() => handleButtonClick("next")}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
