import React, { useState } from "react";

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
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={buttonStyle}
              onClick={() => handleButtonClick("previous")}
            >
              Previous
            </button>
            <button
              style={buttonStyle}
              onClick={() => handleButtonClick("next")}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
