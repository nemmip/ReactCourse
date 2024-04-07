import React from "react";
import menuStore from "../stores/MenuStore";
import Pizza from "./Pizza";

const Menu: React.FC = () => {
  const pizzaList = menuStore((state) => state.pizzaList);
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaList.map((pizza) => (
        <Pizza key={pizza.name} {...pizza} />
      ))}
    </main>
  );
};

export default Menu;
