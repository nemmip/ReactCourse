import React from "react";

const Button: React.FC<{
  textColor: string;
  bgColor: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
