import React, { useState } from "react";
import Logo from "./components/Logo.tsx";
import Form from "./components/Form.tsx";
import PackingList from "./components/PackingList.tsx";
import Stats from "./components/Stats.tsx";
import { Item } from "./typing/item.ts";

const App: React.FC = () => {
  // STATE
  const [items, setItems] = useState<Item[]>([]);

  // HANDLERS
  const handleAddItems = (item: Item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((el) => el.id !== id));
  };

  const handleToggleItem = (id: number) => {
    setItems((items) =>
      items.map((el) => (el.id === id ? { ...el, packed: !el.packed } : el)),
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?",
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
