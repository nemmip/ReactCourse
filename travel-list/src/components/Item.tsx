import React from "react";

const Item: React.FC<{
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
  checked: boolean;
  onDeleteItem: (id: number) => void;
  onToggleItems: (id: number) => void;
}> = ({ id, description, quantity, packed, onDeleteItem, onToggleItems }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => onToggleItems(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
};

export default Item;
