import React from "react";
import Item from "./Item.tsx";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
const PackingList: React.FC = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
