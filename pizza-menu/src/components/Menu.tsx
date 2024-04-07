import React, { Fragment } from "react";
import menuStore from "../stores/MenuStore";
import Pizza from "./Pizza";

const Menu: React.FC = () => {
  const pizzaList = menuStore((state) => state.pizzaList);
  return (
    <Fragment>
      <h2>Our menu</h2>
      {pizzaList.map((pizza) => (
        <Pizza key={pizza.name} {...pizza} />
      ))}
    </Fragment>
  );
};

export default Menu;
