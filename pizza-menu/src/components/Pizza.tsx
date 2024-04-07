import React, { Fragment } from "react";
import PizzaProps from "../types/Pizza/Pizza";

const Pizza: React.FC<PizzaProps> = (props) => {
  return (
    <Fragment>
      <img src={props.photoName} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
    </Fragment>
  );
};

export default Pizza;
