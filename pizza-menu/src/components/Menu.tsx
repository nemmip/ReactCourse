import React from "react";
import menuStore from "../stores/MenuStore";
import Pizza from "./Pizza";

const Menu: React.FC = () => {
  const pizzaList = menuStore((state) => state.pizzaList);
  const isPizzaEmpty = pizzaList.length > 0;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {isPizzaEmpty ? (
        <ul className="pizzas">
          {pizzaList.map((pizza) => (
            <Pizza key={pizza.name} {...pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
