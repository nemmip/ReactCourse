import React, { Fragment } from "react";
import PizzaProps from "../types/Pizza/Pizza";

const Pizza: React.FC<PizzaProps> = (props) => {
  return (
    <Fragment>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </Fragment>
  );
};

export default Pizza;
