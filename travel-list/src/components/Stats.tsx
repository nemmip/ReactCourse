import React from "react";
import { Item } from "../typing/item.ts";

const Stats: React.FC<{
  items: Item[];
}> = ({ items }) => {
  const numberOfItems = items.length;

  if (!numberOfItems) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numberOfPackedItems = items.filter((el) => el.packed).length;
  const packedPercentage = Math.round(
    (numberOfPackedItems / numberOfItems) * 100,
  );
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You've got everything! Ready to go ✈️"
          : `💼 You have ${numberOfItems} items on your list, and you already packed
        ${numberOfPackedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
