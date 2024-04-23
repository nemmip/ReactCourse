import React from "react";

const DateCalculation: React.FC<{
  counter: number;
}> = ({ counter }) => {
  let message: string;
  const now = new Date();
  if (counter === 0) {
    message = `Today is ${now.toLocaleDateString()}`;
  } else {
    message = `${Math.abs(counter)} day${Math.abs(counter) === 1 ? "" : "s"} `;
    if (counter > 0) {
      message += `from today is `;
    } else {
      message += `ago was `;
    }
    const calculatedDate = new Date(now.setDate(now.getDate() + counter));
    message += `${calculatedDate.toLocaleDateString()}`;
  }
  return <h1>{message}</h1>;
};

export default DateCalculation;
