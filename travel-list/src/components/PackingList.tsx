import React, { useState } from "react";
import Item from "./Item.tsx";
import { Item as ItemElement } from "../typing/item.ts";

const PackingList: React.FC<{
  items: ItemElement[];
  onDeleteItem: (id: number) => void;
  onToggleItems: (id: number) => void;
  onClearList: () => void;
}> = ({ items, onDeleteItem, onToggleItems, onClearList }) => {
  // STATE
  const [sortBy, setSortBy] = useState("input");
  let sortedItems: ItemElement[];

  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((el) => (
          <Item
            key={el.id}
            {...el}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
