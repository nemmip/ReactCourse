import React from "react";

const Item: React.FC<{
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}> = ({ id, description, quantity, packed }) => {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
