import React from "react";
import Pizza from "./Pizza";
import pizzaListStore from "../../stores/PizzaListStore";

const PizzaList: React.FC = () => {
  const pizzaList = pizzaListStore((state) => state.pizzaList);
  return (
    <div>
      {pizzaList.map((pizza) => (
        <Pizza {...pizza} />
      ))}
    </div>
  );
};

export default PizzaList;
